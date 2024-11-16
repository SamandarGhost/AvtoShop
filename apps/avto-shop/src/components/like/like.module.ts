import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeResolver } from './like.resolver';
import LikeSchema from '../../schemas/Like.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Like',
        schema: LikeSchema,
      }
    ])
  ],
  providers: [LikeService, LikeResolver],
  exports: [LikeService]
})
export class LikeModule { }
