import { Args, Query, Resolver } from '@nestjs/graphql';
import { ViewService } from './view.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ITEMS } from '../../libs/types/common';
import { OrdinaryInquiry } from '../../libs/dto/car/car.input';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';

@Resolver()
export class ViewResolver {
    constructor(private readonly viewService: ViewService) { }

    @UseGuards(AuthGuard)
    @Query(() => ITEMS)
    public async getVisited(
        @Args('input') input: OrdinaryInquiry,
        @AuthMember('_id') memberId: ObjectId,
    ): Promise<ITEMS> {
        console.log('Query: getVisited');
        return await this.viewService.getVisited(memberId, input);
    }
}
