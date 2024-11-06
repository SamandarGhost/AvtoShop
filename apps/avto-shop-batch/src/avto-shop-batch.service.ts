import { Injectable } from '@nestjs/common';

@Injectable()
export class AvtoShopBatchService {
  getHello(): string {
    return 'Hello Avto Shop Btach!';
  }
}
