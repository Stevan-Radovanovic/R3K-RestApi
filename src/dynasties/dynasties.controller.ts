import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Req } from '@nestjs/common';
import { Dynasty } from 'src/interfaces/dynasty.interface';
import { CreateDynastyDTO } from './dto/create-dynasty.dto';
import { UpdateDynastyDto } from './dto/update-dynasty.dto';
import { DynastiesService } from './dynasties.service';

@Controller('dynasties')
export class DynastiesController {

    constructor(private dynastyService: DynastiesService) { }

    @Get('getAll')
    @HttpCode(240)
    async findAll(): Promise<Dynasty[]> {
        return this.dynastyService.findAll();
    }

    @Post('create')
    @HttpCode(241)
    async createDynasty(@Body() dynastyDto: CreateDynastyDTO) {
        return this.dynastyService.create(dynastyDto);
    }

    @Get('get/:id')
    @HttpCode(240)
    async findOne(@Param('id') id: string): Promise<Dynasty> {
        return this.dynastyService.find(id);
    }

    @Put('update/:id')
    @HttpCode(242)
    async update(@Param('id') id: string, @Body() dynasty: UpdateDynastyDto) {
        this.dynastyService.update(id, dynasty);
    }

    @Delete('delete/:id')
    @HttpCode(243)
    async remove(@Param('id') id: string) {
        this.dynastyService.delete(id);
    }

}
