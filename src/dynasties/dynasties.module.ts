import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DynastiesController } from './dynasties.controller';
import { DynastiesService } from './dynasties.service';
import { Dynasty, DynastySchema } from './dynasty.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Dynasty.name, schema: DynastySchema }])],
    controllers: [DynastiesController],
    providers: [DynastiesService],
})
export class DynastiesModule { }

