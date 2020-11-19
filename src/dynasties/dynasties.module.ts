import { Module } from '@nestjs/common';
import { DynastiesController } from './dynasties.controller';
import { DynastiesService } from './dynasties.service';

@Module({
    imports: [DynastiesModule],
    controllers: [DynastiesController],
    providers: [DynastiesService],
})
export class DynastiesModule { }

