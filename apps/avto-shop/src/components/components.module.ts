import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { ProductsModule } from './products/products.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    MemberModule,
    ProductsModule,
    CarsModule
  ]
})
export class ComponentsModule { }
