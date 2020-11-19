import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynastiesController } from './dynasties/dynasties.controller';
import { DynastiesService } from './dynasties/dynasties.service';

@Module({
  imports: [],
  controllers: [AppController, DynastiesController],
  providers: [AppService, DynastiesService],
})
export class AppModule {}
