import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Req } from '@nestjs/common';
import { CreateDynastyDTO } from './dto/create-dynasty.dto';
import { UpdateDynastyDto } from './dto/update-dynasty.dto';

@Controller('dynasties')
export class DynastiesController {

    @Get('getAll')
    @HttpCode(240)
    findAll(): string {
        return 'Returns all dynasties';
    }

    @Post('create')
    @HttpCode(241)
    createDynasty(@Body() dynastyDto: CreateDynastyDTO): string {
        return 'Creates a new dynasty';
    }

    @Get('get/:id')
    findOne(@Param('id') id: string): string {
        return `Returns one selected dynasty`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dynasty: UpdateDynastyDto) {
      return `Updates the selected dynasty`;
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return `Deletes the selected dynasty`;
    }

}
