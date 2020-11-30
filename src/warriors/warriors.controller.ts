import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { WarriorsService } from './warriors.service';
import { CreateWarriorDto } from './dto/create-warrior.dto';
import { UpdateWarriorDto } from './dto/update-warrior.dto';

@Controller('warriors')
export class WarriorsController {
  constructor(private readonly warriorsService: WarriorsService) {}

  //TODO - Level Up, Change Weapon separate routes

  @Post()
  create(@Body() createWarriorDto: CreateWarriorDto) {
    return this.warriorsService.create(createWarriorDto);
  }

  @Get()
  findAll() {
    return this.warriorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warriorsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateWarriorDto: UpdateWarriorDto) {
    return this.warriorsService.update(+id, updateWarriorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.warriorsService.remove(+id);
  }
}
