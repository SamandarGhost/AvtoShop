import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { DealerService } from './dealer.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { MemberType } from '../../libs/enums/member.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';
import { Dealer, Dealers } from '../../libs/dto/dealer/dealer';
import { AllDealersInquiry, DealerInput, DealersInquiry } from '../../libs/dto/dealer/dealer.input';
import { DealerUpdate } from '../../libs/dto/dealer/dealer.update';
import { shapeIntoMongoObjectId } from '../../libs/config';
import { WithoutGuard } from '../auth/guards/without.guard';
import { AuthGuard } from '../auth/guards/auth.guard';
import { OrdinaryInquiry } from '../../libs/dto/car/car.input';

@Resolver()
export class DealerResolver {
    constructor(private readonly dealerService: DealerService) { }

    @Roles(MemberType.DEALER)
    @UseGuards(RolesGuard)
    @Mutation(() => Dealer)
    public async createDealer(
        @Args('input') input: DealerInput,
        @AuthMember('_id') memberId: ObjectId,
    ): Promise<Dealer> {
        console.log('Mutation: createDealer');
        input.memberId = memberId
        return await this.dealerService.createDealer(memberId, input);
    }

    @Roles(MemberType.DEALER)
    @UseGuards(RolesGuard)
    @Mutation(() => Dealer)
    public async updateDealer(
        @Args('input') input: DealerUpdate,
        @AuthMember('_id') memberId: ObjectId,
    ): Promise<Dealer> {
        console.log('Mutation: updateDealer');
        input._id = shapeIntoMongoObjectId(input._id);
        return await this.dealerService.updateDealer(memberId, input);
    }

    @UseGuards(WithoutGuard)
    @Query(() => Dealer)
    public async getDealer(
        @Args('dealerId') input: string,
        @AuthMember('_id') memberId: ObjectId,
    ): Promise<Dealer> {
        console.log('Query: getDealer');
        const dealerId = shapeIntoMongoObjectId(input);
        return await this.dealerService.getDealer(memberId, dealerId);
    }

    @UseGuards(WithoutGuard)
    @Query(() => Dealers)
    public async getDealers(
        @Args('input') input: DealersInquiry,
        @AuthMember('_id') memberId: ObjectId,
    ): Promise<Dealers> {
        console.log('Query: getDealers');
        return await this.dealerService.getDealers(memberId, input);
    }

    @UseGuards(AuthGuard)
    @Mutation(() => Dealer)
    public async likeTargetDealer(
        @Args('dealerId') input: string,
        @AuthMember('_id') memberId: ObjectId
    ): Promise<Dealer> {
        console.log("Mutation: likeTargetDealer ");
        const likeRefId = shapeIntoMongoObjectId(input);
        return await this.dealerService.likeTargetDealer(memberId, likeRefId);
    }

    @UseGuards(AuthGuard)
    @Query(() => Dealers)
    public async getVisitedDealer(
        @Args('input') input: OrdinaryInquiry,
        @AuthMember('_id') memberId: ObjectId,
    ): Promise<Dealers> {
        console.log('Query: getVisitedDealer');
        return await this.dealerService.getVisitedDealer(memberId, input);
    }

    @UseGuards(AuthGuard)
    @Query(() => Dealers)
    public async getFavoriteDealer(
        @Args('input') input: OrdinaryInquiry,
        @AuthMember('_id') memberId: ObjectId,
    ): Promise<Dealers> {
        console.log('Query: getFavoriteDealer');
        return await this.dealerService.getFavoriteDealer(memberId, input);
    }

    @Roles(MemberType.ADMIN)
    @UseGuards(RolesGuard)
    @Query(() => Dealers)
    public async getAllDealersByAdmin(
        @Args('input') input: AllDealersInquiry,
        @AuthMember('_id') memberId: ObjectId,
    ): Promise<Dealers> {
        console.log('Query: getAllDealersByAdmin');
        return await this.dealerService.getAllDealersByAdmin(input);
    }

    @Roles(MemberType.ADMIN)
    @UseGuards(RolesGuard)
    @Mutation(() => Dealer)
    public async updateDealerByAdmin(
        @Args('input') input: DealerUpdate,
    ): Promise<Dealer> {
        console.log('Mutation: updateDealerByAdmin');
        input._id = shapeIntoMongoObjectId(input._id);
        return await this.dealerService.updateDealerByAdmin(input);
    }

    @Roles(MemberType.ADMIN)
    @UseGuards(RolesGuard)
    @Mutation(() => Dealer)
    public async removeDealerByAdmin(
        @Args('dealerId') input: string,
    ): Promise<Dealer> {
        console.log('Mutation: removeDealerByAdmin');
        const dealerId = shapeIntoMongoObjectId(input);
        return await this.dealerService.removeDealerByAdmin(dealerId);
    }
}
