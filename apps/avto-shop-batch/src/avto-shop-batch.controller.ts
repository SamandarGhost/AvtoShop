import { Controller, Get } from '@nestjs/common';
import { AvtoShopBatchService } from './avto-shop-batch.service';

@Controller()
export class AvtoShopBatchController {
  constructor(private readonly avtoShopBatchService: AvtoShopBatchService) { }

  @Get()
  getHello(): string {
    return this.avtoShopBatchService.getHello();
  }
}
