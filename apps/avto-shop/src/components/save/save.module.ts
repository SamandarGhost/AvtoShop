import { Module } from '@nestjs/common';
import { SaveService } from './save.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SaveResolver } from './save.resolver';
import SaveSchema from '../../schemas/Save.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Save',
        schema: SaveSchema,
      }
    ])
  ],
  providers: [SaveService, SaveResolver],
  exports: [SaveService],
})
export class SaveModule { }
