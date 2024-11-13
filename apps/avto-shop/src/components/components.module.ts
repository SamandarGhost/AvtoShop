import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CarsModule } from './cars/cars.module';
import { BoardArticleModule } from './board-article/board-article.module';
import { AuthModule } from './auth/auth.module';
import { MemberModule } from './member/member.module';
import { LikeModule } from './like/like.module';
import { ViewModule } from './view/view.module';
import { CommentModule } from './comment/comment.module';
import { FollowModule } from './follow/follow.module';
import { CarServiceModule } from './car-service/car-service.module';
import { DealerModule } from './dealer/dealer.module';
import { SaveModule } from './save/save.module';

@Module({
  imports: [
    ProductsModule,
    CarsModule,
    MemberModule,
    AuthModule,
    BoardArticleModule,
    LikeModule,
    ViewModule,
    CommentModule,
    FollowModule,
    CarServiceModule,
    DealerModule,
    SaveModule
  ]
})
export class ComponentsModule { }
