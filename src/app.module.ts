import { Module } from '@nestjs/common';
import { DynastiesController } from './dynasties/dynasties.controller';
import { DynastiesService } from './dynasties/dynasties.service';

@Module({
  imports: [],
  controllers: [DynastiesController],
  providers: [DynastiesService],
})
export class AppModule {}
