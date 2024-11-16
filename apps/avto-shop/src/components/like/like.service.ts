import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Like, MeLiked } from '../../libs/dto/like/like';
import { LikeInput } from '../../libs/dto/like/like.input';
import { ITEMS, T } from '../../libs/types/common';
import { Message } from '../../libs/enums/common.enum';
import { OrdinaryInquiry } from '../../libs/dto/car/car.input';
import { lookupFavorite } from '../../libs/config';

@Injectable()
export class LikeService {
    constructor(@InjectModel('Like') private readonly likeModel: Model<Like>) { }

    public async toggleLike(input: LikeInput): Promise<number> {
        const search: T = { memberId: input.memberId, likeRefId: input.likeRefId } = input,
            exist = await this.likeModel.findOne(search).exec();
        let modifier = 1;
        if (exist) {
            await this.likeModel.findOneAndDelete(search).exec();
            modifier = -1;
        } else {
            try {
                await this.likeModel.create(input);
            } catch (err) {
                console.log("Error: ServiceLike.model", err.message);
                throw new InternalServerErrorException(Message.CREATE_FAILED);
            }
        }
        console.log(`-LikeModifier- ${modifier}-`)
        return modifier;
    }


    public async checkLikeExistence(input): Promise<MeLiked[]> {
        const { memberId, likeRefId } = input;
        const result = await this.likeModel.findOne({ memberId: memberId, likeRefId: likeRefId }).exec();
        return result ? [{ memberId: memberId, likeRefId: likeRefId, myFavorite: true }] : []
    }


    public async getFavorites(memberId: ObjectId, input: OrdinaryInquiry): Promise<ITEMS> {
        const { page, limit } = input;
        const match: T = { likeGroup: { $in: ['CAR', 'PRODUCT'] }, memberId: memberId };

        const data: T = await this.likeModel.aggregate([
            { $match: match },
            { $sort: { updatedAt: -1 } },
            {
                $lookup: {
                    from: 'cars',
                    localField: 'likeRefId',
                    foreignField: '_id',
                    as: 'favoriteItems',
                },
            },
            {
                $lookup: {
                    from: 'products',
                    localField: 'likeRefId',
                    foreignField: '_id',
                    as: 'favoriteItems',
                }
            },
            {
                $project: {
                    favoriteItems: {
                        $cond: {
                            if: { $eq: [{ $type: '$favoriteItems' }, 'array'] },
                            then: '$favoriteItems',
                            else: []
                        }
                    },
                },
            },
            { $unwind: '$favoriteItems' },
            {
                $facet: {
                    list: [
                        { $skip: (page - 1) * limit },
                        { $limit: limit },
                        lookupFavorite,
                        { $unwind: '$favoriteItems.memberData' }
                    ],
                    metaCounter: [{ $count: 'total' }],
                },
            },
        ]).exec();


        const result: ITEMS = { list: [], metaCounter: data[0].metaCounter };
        result.list = data[0].list.map((ele) => ele.favoriteItems);
        return result;
    }
}
