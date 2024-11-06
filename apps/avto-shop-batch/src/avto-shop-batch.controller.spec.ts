import { Test, TestingModule } from '@nestjs/testing';
import { AvtoShopBatchController } from './avto-shop-batch.controller';
import { AvtoShopBatchService } from './avto-shop-batch.service';

describe('AvtoShopBatchController', () => {
  let avtoShopBatchController: AvtoShopBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AvtoShopBatchController],
      providers: [AvtoShopBatchService],
    }).compile();

    avtoShopBatchController = app.get<AvtoShopBatchController>(AvtoShopBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(avtoShopBatchController.getHello()).toBe('Hello World!');
    });
  });
});
