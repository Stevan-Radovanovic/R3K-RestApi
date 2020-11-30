import { Module } from '@nestjs/common';
import { WarriorsService } from './warriors.service';
import { WarriorsController } from './warriors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Warrior, WarriorSchema } from './warriors.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Warrior.name, schema: WarriorSchema }])],
  controllers: [WarriorsController],
  providers: [WarriorsService]
})
export class WarriorsModule {}
