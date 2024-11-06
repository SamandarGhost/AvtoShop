import { Module } from '@nestjs/common';
import { AvtoShopBatchController } from './avto-shop-batch.controller';
import { AvtoShopBatchService } from './avto-shop-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AvtoShopBatchController],
  providers: [AvtoShopBatchService],
})
export class AvtoShopBatchModule { }
