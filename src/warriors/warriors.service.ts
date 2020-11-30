import { Injectable } from '@nestjs/common';
import { CreateWarriorDto } from './dto/create-warrior.dto';
import { UpdateWarriorDto } from './dto/update-warrior.dto';

@Injectable()
export class WarriorsService {
  create(createWarriorDto: CreateWarriorDto) {
    return 'This action adds a new warrior';
  }

  findAll() {
    return `This action returns all warriors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} warrior`;
  }

  update(id: number, updateWarriorDto: UpdateWarriorDto) {
    return `This action updates a #${id} warrior`;
  }

  remove(id: number) {
    return `This action removes a #${id} warrior`;
  }
}
