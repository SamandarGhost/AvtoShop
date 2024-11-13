import { Module } from '@nestjs/common';
import { CarServiceResolver } from './car-service.resolver';
import { CarServiceService } from './car-service.service';

@Module({
  providers: [CarServiceResolver, CarServiceService]
})
export class CarServiceModule {}
