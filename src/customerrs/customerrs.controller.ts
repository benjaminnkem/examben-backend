import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerrsService } from './customerrs.service';
import { CreateCustomerrDto } from './dto/create-customerr.dto';
import { UpdateCustomerrDto } from './dto/update-customerr.dto';

@Controller('customerrs')
export class CustomerrsController {
  constructor(private readonly customerrsService: CustomerrsService) {}

  @Post()
  create(@Body() createCustomerrDto: CreateCustomerrDto) {
    return this.customerrsService.create(createCustomerrDto);
  }

  @Get()
  findAll() {
    return this.customerrsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerrsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerrDto: UpdateCustomerrDto) {
    return this.customerrsService.update(+id, updateCustomerrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerrsService.remove(+id);
  }
}
