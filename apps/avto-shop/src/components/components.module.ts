import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CarsModule } from './cars/cars.module';
import { AuthModule } from './auth/auth.module';
import { CarServiceModule } from './car-service/car-service.module';
import { DealerModule } from './dealer/dealer.module';
import { SaveModule } from './save/save.module';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';
import { FollowModule } from './follow/follow.module';
import { LikeModule } from './like/like.module';
import { ViewModule } from './view/view.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    AuthModule,
    CarServiceModule,
    CarsModule,
    DealerModule,
    ProductsModule,
    SaveModule,
    ArticleModule,
    CommentModule,
    FollowModule,
    LikeModule,
    ViewModule,
    MemberModule,
  ]
})
export class ComponentsModule { }
