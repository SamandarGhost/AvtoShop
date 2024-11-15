import { Module } from '@nestjs/common';
import { DealerResolver } from './dealer.resolver';
import { DealerService } from './dealer.service';
import { MongooseModule } from '@nestjs/mongoose';
import DealerSchema from '../../schemas/Dealer.model';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { MemberModule } from '../member/member.module';
import { LikeModule } from '../like/like.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Dealer', schema: DealerSchema }]),
    AuthModule,
    ViewModule,
    MemberModule,
    LikeModule
  ],
  providers: [DealerResolver, DealerService],
  exports: [DealerService],
})
export class DealerModule { }
