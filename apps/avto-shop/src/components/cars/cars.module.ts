import { Module } from '@nestjs/common';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';
import { MongooseModule } from '@nestjs/mongoose';
import CarSchema from '../../schemas/Car.model';
import { AuthModule } from '../auth/auth.module';
import { MemberModule } from '../member/member.module';
import { ViewModule } from '../view/view.module';
import { LikeModule } from '../like/like.module';
import { SaveModule } from '../save/save.module';
import { DealerModule } from '../dealer/dealer.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }]),
    AuthModule,
    MemberModule,
    ViewModule,
    LikeModule,
    SaveModule,
    DealerModule,
  ],
  providers: [CarsResolver, CarsService],
  exports: [CarsService],
})
export class CarsModule { }
