import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynastiesController } from './dynasties/dynasties.controller';

@Module({
  imports: [],
  controllers: [AppController, DynastiesController],
  providers: [AppService],
})
export class AppModule {}
