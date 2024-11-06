import { NestFactory } from '@nestjs/core';
import { AvtoShopBatchModule } from './avto-shop-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(AvtoShopBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
