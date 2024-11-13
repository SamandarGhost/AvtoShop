import { Module } from '@nestjs/common';
import { SaveResolver } from './save.resolver';
import { SaveService } from './save.service';

@Module({
  providers: [SaveResolver, SaveService]
})
export class SaveModule {}
