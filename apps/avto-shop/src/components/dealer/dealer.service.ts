import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Dealer, Dealers } from '../../libs/dto/dealer/dealer';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ViewService } from '../view/view.service';
import { MemberService } from '../member/member.service';
import { LikeService } from '../like/like.service';
import { AllDealersInquiry, DealerInput, DealersInquiry } from '../../libs/dto/dealer/dealer.input';
import { Direction, Message } from '../../libs/enums/common.enum';
import { DealerUpdate } from '../../libs/dto/dealer/dealer.update';
import { StatisticModifier, T } from '../../libs/types/common';
import { DealerStatus } from '../../libs/enums/dealer.enum';
import { ViewGroup } from '../../libs/enums/view.enum';
import { lookupAuthMemberLiked, lookupMember, shapeIntoMongoObjectId } from '../../libs/config';
import { LikeInput } from '../../libs/dto/like/like.input';
import { LikeGroup } from '../../libs/enums/like.enum';
import { OrdinaryInquiry } from '../../libs/dto/car/car.input';
import { Schema } from 'inspector/promises';
import { MemberUpdate } from '../../libs/dto/member/member.update';

@Injectable()
export class DealerService {
    constructor(@InjectModel('Dealer') private readonly dealerModel: Model<Dealer>,
        private viewService: ViewService,
        private memberService: MemberService,
        private likeService: LikeService,
    ) { }

    public async createDealer(memberId: ObjectId, input: DealerInput): Promise<Dealer> {
        try {
            const result = await this.dealerModel.create(input);
            let dealerId = result._id;
            await this.memberService.insertDealerId(memberId, dealerId);
            return result;
        } catch (err) {
            console.log('Error Dealer.Model createDealer:', err.message);
            throw new InternalServerErrorException(Message.CREATE_FAILED)
        }
    }

    public async updateDealer(memberId: ObjectId, input: DealerUpdate): Promise<Dealer> {
        let { dealerStatus } = input;
        const search: T = {
            _id: input._id,
            memberId: memberId,
            dealerStatus: DealerStatus.ACTIVE,
        };

        if (dealerStatus === DealerStatus.DELETE || dealerStatus === DealerStatus.BLOCK) {
            throw new InternalServerErrorException(Message.BLOCKED_USER);
        }

        const result = await this.dealerModel.findOneAndUpdate(search, input, { new: true }).exec();
        if (!result) throw new InternalServerErrorException(Message.UPDATE_FAILED);

        return result;
    }

    public async getDealer(memberId: ObjectId, dealerId: ObjectId): Promise<Dealer> {
        const search: T = {
            _id: dealerId,
            dealerStatus: DealerStatus.ACTIVE,
        };
        const targetDealer = await this.dealerModel.findOne(search).exec();
        if (!targetDealer) throw new InternalServerErrorException(Message.N0_DATA_FOUND);

        if (memberId) {
            const viewInput = { memberId: memberId, viewRefId: dealerId, viewGroup: ViewGroup.DEALER };
            const newView = await this.viewService.recordView(viewInput);
            if (newView) {
                await this.dealerStatsEditor({ _id: dealerId, targetKey: 'dealerViews', modifier: 1 });
                targetDealer.dealerViews++;
            }

            const likeInput = { memberId: memberId, likeRefId: dealerId };
            targetDealer.meLiked = await this.likeService.checkLikeExistence(likeInput);
        }

        targetDealer.memberData = await this.memberService.getMember(null, targetDealer.memberId);
        return targetDealer;
    }

    public async getDealers(memberId: ObjectId, input: DealersInquiry): Promise<Dealers> {
        const match: T = { dealerStatus: DealerStatus.ACTIVE };
        const sort: T = { [input?.sort ?? 'createdAt']: input?.direction ?? Direction.DESC };

        this.shapeMatchQuery(match, input);
        const result = await this.dealerModel
            .aggregate([
                { $match: match },
                { $sort: sort },
                {
                    $facet: {
                        list: [
                            { $skip: (input.page - 1) * input.limit },
                            { $limit: input.limit },
                            lookupAuthMemberLiked(memberId),
                            lookupMember,
                            { $unwind: '$memberData' },
                        ],
                        metaCounter: [{ $count: 'total' }],
                    },
                },
            ])
            .exec();
        if (!result.length) throw new InternalServerErrorException(Message.N0_DATA_FOUND);

        return result[0];
    }

    private shapeMatchQuery(match: T, input: DealersInquiry): void {
        const {
            memberId,
            brandList,
            locationList,
            text,
        } = input.search;
        if (memberId) match.memberId = shapeIntoMongoObjectId(memberId);
        if (brandList && brandList.length) match.dealerBrand = { $in: brandList };
        if (locationList && locationList.length) match.DealerLocation = { $in: locationList };
        if (text) match.dealerTitle = { $regex: new RegExp(text, 'i') };
    }

    public async likeTargetDealer(memberId: ObjectId, likeRefId: ObjectId): Promise<Dealer> {
        const target: Dealer = await this.dealerModel.findOne({
            _id: likeRefId,
            dealerStatus: DealerStatus.ACTIVE,
        });
        if (!target) throw new InternalServerErrorException(Message.N0_DATA_FOUND);

        const input: LikeInput = {
            memberId: memberId,
            likeRefId: likeRefId,
            likeGroup: LikeGroup.DEALER,
        };

        const modifier: number = await this.likeService.toggleLike(input);
        const result = await this.dealerStatsEditor({
            _id: likeRefId,
            targetKey: 'dealerLikes',
            modifier: modifier,
        });

        if (!result) throw new InternalServerErrorException(Message.SOMETHING_WENT_WRONG);
        return result;
    }

    public async getVisitedDealer(memberId: ObjectId, input: OrdinaryInquiry): Promise<Dealers> {
        return await this.viewService.getVisitedDealer(memberId, input);
    }

    public async getFavoriteDealer(memberId: ObjectId, input: OrdinaryInquiry): Promise<Dealers> {
        return await this.likeService.getFavoriteDealers(memberId, input);
    }

    public async getAllDealersByAdmin(input: AllDealersInquiry): Promise<Dealers> {
        const { dealerStatus, locationList, brandList, text } = input.search;
        const match: T = {};
        const sort: T = { [input?.sort ?? 'createdAt']: input?.direction ?? Direction.DESC };

        if (dealerStatus) match.dealerStatus = dealerStatus;
        if (locationList && locationList.length) match.dealerLocation = { $in: locationList };
        if (brandList && brandList.length) match.dealerBrand = { $in: brandList };
        if (text) match.dealerTitle = { $regex: new RegExp(text, 'i') };

        const result = await this.dealerModel
            .aggregate([
                { $match: match },
                { $sort: sort },
                {
                    $facet: {
                        list: [
                            { $skip: (input.page - 1) * input.limit },
                            { $limit: input.limit },
                            lookupMember,
                            { $unwind: '$memberData' },
                        ],
                        metaCounter: [{ $count: 'total' }],
                    },
                },
            ])
            .exec();

        if (!result.length) throw new InternalServerErrorException(Message.N0_DATA_FOUND);
        return result[0];
    }

    public async updateDealerByAdmin(input: DealerUpdate): Promise<Dealer> {
        let { dealerStatus } = input;
        const search: T = {
            _id: input._id,
            dealerStatus: DealerStatus.ACTIVE,
        };
        const result = await this.dealerModel.findOneAndUpdate(search, input, { new: true }).exec();
        if (!result) throw new InternalServerErrorException(Message.UPDATE_FAILED);
        return result;
    }

    public async removeDealerByAdmin(dealerId: ObjectId): Promise<Dealer> {
        const search: T = { _id: dealerId, dealerStatus: DealerStatus.DELETE };
        const result = await this.dealerModel.findOneAndDelete(search).exec();
        if (!result) throw new InternalServerErrorException(Message.REMOVE_FAILED);
        return result;
    }


    public async dealerStatsEditor(input: StatisticModifier): Promise<Dealer> {
        const { _id, targetKey, modifier } = input;
        return await this.dealerModel.findByIdAndUpdate(
            _id, { $inc: { [targetKey]: modifier } }, { new: true }).exec();
    }
}
