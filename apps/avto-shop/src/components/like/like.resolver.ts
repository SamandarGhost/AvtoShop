import { Args, Query, Resolver } from '@nestjs/graphql';
import { LikeService } from './like.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ITEMS } from '../../libs/types/common';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { OrdinaryInquiry } from '../../libs/dto/car/car.input';
import { ObjectId } from 'mongoose';

@Resolver()
export class LikeResolver {
    constructor(private readonly likeService: LikeService) { }

    @UseGuards(AuthGuard)
    @Query(() => ITEMS)
    public async getFavorites(
        @Args('input') input: OrdinaryInquiry,
        @AuthMember('_id') memberId: ObjectId,
    ): Promise<ITEMS> {
        console.log('Query: getFavorites');
        return await this.likeService.getFavorites(memberId, input);
    }
}
