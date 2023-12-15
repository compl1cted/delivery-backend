import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateItemDto, UpdateItemDto } from './item.dto';
import { AbstractItemService } from './item.interface';

@Controller('dish')
export class ItemController {
  constructor(private readonly itemService: AbstractItemService) {}

  @Post()
  async create(@Body() createItem: CreateItemDto) {
    return await this.itemService.create(createItem);
  }

  @Get()
  async findAll() {
    return await this.itemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.itemService.findById(+id);
  }

  @Patch(':id')
  async update(@Body() updateItem: UpdateItemDto) {
    return await this.itemService.update(updateItem);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.itemService.remove(+id);
  }
}
