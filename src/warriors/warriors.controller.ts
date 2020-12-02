import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { WarriorsService } from './warriors.service';
import { CreateWarriorDto } from './dto/create-warrior.dto';
import { UpdateWarriorDto } from './dto/update-warrior.dto';
import { ChangeWeaponDto } from './dto/change-weapon.dto';

@Controller('warriors')
export class WarriorsController {
  constructor(private readonly warriorsService: WarriorsService) {}

  @Post('create')
  @HttpCode(241)
  create(@Body() createWarriorDto: CreateWarriorDto) {
    return this.warriorsService.create(createWarriorDto);
  }

  @Get('getAll')
  @HttpCode(240)
  findAll() {
    return this.warriorsService.findAll();
  }

  @Get('get/:id')
  @HttpCode(240)
  findOne(@Param('id') id: string) {
    return this.warriorsService.findOne(id);
  }

  @Put('update/:id')
  @HttpCode(242)
  update(@Param('id') id: string, @Body() updateWarriorDto: UpdateWarriorDto) {
    return this.warriorsService.update(id, updateWarriorDto);
  }

  @Delete('delete/:id')
  @HttpCode(243)
  remove(@Param('id') id: string) {
    return this.warriorsService.remove(id);
  }
}
