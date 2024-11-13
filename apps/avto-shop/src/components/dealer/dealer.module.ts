import { Module } from '@nestjs/common';
import { DealerResolver } from './dealer.resolver';
import { DealerService } from './dealer.service';

@Module({
  providers: [DealerResolver, DealerService]
})
export class DealerModule {}
