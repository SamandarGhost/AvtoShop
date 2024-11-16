import { Args, Query, Resolver } from '@nestjs/graphql';
import { SaveService } from './save.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ITEMS } from '../../libs/types/common';
import { OrdinaryInquiry } from '../../libs/dto/car/car.input';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';

@Resolver()
export class SaveResolver {
    constructor(private readonly saveService: SaveService) { }

    @UseGuards(AuthGuard)
    @Query(() => ITEMS)
    public async getSaved(
        @Args('input') input: OrdinaryInquiry,
        @AuthMember('_id') memberId: ObjectId,
    ): Promise<ITEMS> {
        console.log('Query: getFavorites');
        return await this.saveService.getSaved(memberId, input);
    }
}
