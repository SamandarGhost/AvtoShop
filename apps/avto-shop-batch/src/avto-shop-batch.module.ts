import { Module } from '@nestjs/common';
import { AvtoShopBatchController } from './avto-shop-batch.controller';
import { AvtoShopBatchService } from './avto-shop-batch.service';

@Module({
  imports: [],
  controllers: [AvtoShopBatchController],
  providers: [AvtoShopBatchService],
})
export class AvtoShopBatchModule {}
