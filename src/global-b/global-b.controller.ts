import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GlobalBService } from './global-b.service';
import { CreateGlobalBDto } from './dto/create-global-b.dto';
import { UpdateGlobalBDto } from './dto/update-global-b.dto';

@Controller('global-b')
export class GlobalBController {
  constructor(private readonly globalBService: GlobalBService) {}

  @Post()
  create(@Body() createGlobalBDto: CreateGlobalBDto) {
    return this.globalBService.create(createGlobalBDto);
  }

  @Get()
  findAll() {
    return this.globalBService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.globalBService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGlobalBDto: UpdateGlobalBDto) {
    return this.globalBService.update(+id, updateGlobalBDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.globalBService.remove(+id);
  }
}
