import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Member, Members } from '../../libs/dto/member/member';
import { Follower, Following, MeFollowed } from '../../libs/dto/follow/follow';
import { AuthService } from '../auth/auth.service';
import { ViewService } from '../view/view.service';
import { LikeService } from '../like/like.service';
import { AgentsInquiry, LoginInput, MemberInput, MembersInquiry } from '../../libs/dto/member/member.input';
import { Direction, Message } from '../../libs/enums/common.enum';
import { MemberStatus, MemberType } from '../../libs/enums/member.enum';
import { MemberUpdate } from '../../libs/dto/member/member.update';
import { ViewGroup } from '../../libs/enums/view.enum';
import { LikeGroup } from '../../libs/enums/like.enum';
import { StatisticModifier, T } from '../../libs/types/common';
import { lookupAuthMemberLiked } from '../../libs/config';
import { LikeInput } from '../../libs/dto/like/like.input';

@Injectable()
export class MemberService {
    constructor(
        @InjectModel('Member') private readonly memberModel: Model<Member>,
        @InjectModel('Follow') private readonly followModel: Model<Follower | Following>,
        private authService: AuthService,
        private viewService: ViewService,
        private likeService: LikeService,
    ) { }


    public async signup(input: MemberInput): Promise<Member> {
        input.memberPassword = await this.authService.hashPassword(input.memberPassword);
        try {
            const result = await this.memberModel.create(input);
            result.accessToken = await this.authService.createToken(result);
            return result;
        } catch (err) {
            console.log("Error Service.Model signup:", err.message);
            throw new BadRequestException(Message.USED_MEMBER_NICK_OR_PHONE);
        }
    };

    public async login(input: LoginInput): Promise<Member> {
        const { memberNick, memberPassword } = input;
        const response: Member = await this.memberModel
            .findOne({ memberNick: memberNick })
            .select('+memberPassword')
            .exec();

        if (!response || response.memberStatus === MemberStatus.DELETE) {
            throw new InternalServerErrorException(Message.NO_MEMBER_NICK);
        } else if (response.memberStatus === MemberStatus.BLOCK) {
            throw new InternalServerErrorException(Message.BLOCKED_USER);
        };

        const isMatch = await this.authService.comparePassword(input.memberPassword, response.memberPassword);
        if (!isMatch) throw new InternalServerErrorException(Message.WRONG_PASSWORD);

        response.accessToken = await this.authService.createToken(response);
        return response;
    };

    public async updateMember(memberId: ObjectId, input: MemberUpdate): Promise<Member> {
        console.log("input:", input.memberImage);
        console.log("memberId:", memberId);


        const result: Member = await this.memberModel.findOneAndUpdate({
            _id: memberId,
            memberStatus: MemberStatus.ACTIVE,
        }, input, { new: true }).exec();
        if (!result) throw new InternalServerErrorException(Message.UPDATE_FAILED);
        result.accessToken = await this.authService.createToken(result);
        return result;
    };

    public async getMember(memberId: ObjectId, targetId: ObjectId): Promise<Member> {
        const search: T = {
            _id: targetId,
            memberStatus: {
                $in: [MemberStatus.ACTIVE, MemberType.AGENT],
            },
        };
        const targetMember = await this.memberModel.findOne(search).lean().exec() as Member;
        if (!targetMember) throw new InternalServerErrorException(Message.N0_DATA_FOUND);
        if (memberId) {
            const viewInput = { memberId: memberId, viewRefId: targetId, viewGroup: ViewGroup.MEMBER };
            const newview = await this.viewService.recordView(viewInput);
            if (newview) {
                await this.memberModel.findOneAndUpdate(search, { $inc: { memberViews: 1 } }, { new: true }).exec();
                targetMember.memberViews++;
            }

            const likeInput = { memberId: memberId, likeRefId: targetId, likeGroup: LikeGroup.MEMBER };
            (targetMember as any).meLiked = await this.likeService.checkLikeExistence(likeInput);

            (targetMember as any).meFollowed = await this.checkSubscription(memberId, targetId);
        }
        return targetMember;
    };

    private async checkSubscription(followerId: ObjectId, followingId: ObjectId): Promise<MeFollowed[]> {
        const result = await this.followModel.findOne({
            followerId: followerId,
            followingId: followingId,
        }).exec();
        return result ? [{ followerId: followerId, followingId: followingId, myFollowing: true }] : [];
    }

    public async getAgents(memberId: ObjectId, input: AgentsInquiry): Promise<Members> {
        const { text } = input.search;
        const match: T = { memberType: MemberType.AGENT, memberStatus: MemberStatus.ACTIVE };
        const sort: T = { [input?.sort ?? 'createdAt']: input?.direction ?? Direction.DESC };

        if (text) match.memberNick = { $regex: new RegExp(text, 'i') };
        console.log('match:', match);

        const result = await this.memberModel
            .aggregate([
                { $match: match },
                { $sort: sort },
                {
                    $facet: {
                        list: [{ $skip: (input.page - 1) * input.limit },
                        { $limit: input.limit },
                        lookupAuthMemberLiked(memberId),
                        ],
                        metaCounter: [{ $count: 'total' }],
                    },
                },
            ])
            .exec();
        if (!result.length) throw new InternalServerErrorException(Message.N0_DATA_FOUND);

        return result[0];
    };

    public async likeTargetMember(memberId: ObjectId, likeRefId: ObjectId): Promise<Member> {
        const target: Member = await this.memberModel.findOne({ _id: likeRefId, memberStatus: MemberStatus.ACTIVE });
        if (!target) throw new InternalServerErrorException(Message.N0_DATA_FOUND);

        const input: LikeInput = {
            memberId: memberId,
            likeRefId: likeRefId,
            likeGroup: LikeGroup.MEMBER
        };
        let modifier: number = await this.likeService.toggleLike(input);
        const result = this.memberStatsEditor({ _id: likeRefId, targetKey: 'memberLikes', modifier: modifier });

        if (!result) throw new InternalServerErrorException(Message.SOMETHING_WENT_WRONG);

        return result;
    }

    public async getAllMembersByAdmin(input: MembersInquiry): Promise<Members> {
        const { memberStatus, memberType, text } = input.search;
        const match: T = {};
        const sort: T = { [input?.sort ?? 'createdAt']: input?.direction ?? Direction.DESC };

        if (memberStatus) match.memberStatus = memberStatus;
        if (memberType) match.memberType = memberType;
        if (text) match.memberNick = { $regex: new RegExp(text, 'i') };
        console.log('match:', match);

        const result = await this.memberModel
            .aggregate([
                { $match: match },
                { $sort: sort },
                {
                    $facet: {
                        list: [{ $skip: (input.page - 1) * input.limit }, { $limit: input.limit }],
                        metaCounter: [{ $count: 'total' }],
                    },
                },
            ])
            .exec();
        if (!result.length) throw new InternalServerErrorException(Message.N0_DATA_FOUND);

        return result[0];
    };

    public async updateMemberByAdmin(input: MemberUpdate): Promise<Member> {
        const result = await this.memberModel.findOneAndUpdate({ _id: input._id }, input, { new: true }).exec();
        if (!result) throw new InternalServerErrorException(Message.UPDATE_FAILED);
        return result;
    };

    public async memberStatsEditor(input: StatisticModifier): Promise<Member> {
        console.log('executed!');

        const { _id, targetKey, modifier } = input;
        return this.memberModel.findByIdAndUpdate(_id, { $inc: { [targetKey]: modifier } }, { new: true }).exec();
    }
}
