import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbstractCartItemService } from './cart-item.interface';
import { CreateCartItemDto, UpdateCartItemDto } from './cart-item.dto';

@Controller('cart-dish')
export class CartDishController {
  constructor(private readonly cartDishService: AbstractCartItemService) {}

  @Post()
  async create(@Body() createCartDishDto: CreateCartItemDto) {
    return await  this.cartDishService.create(createCartDishDto);
  }

  @Get()
  async findAll() {
    return await this.cartDishService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cartDishService.findById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCartDishDto: UpdateCartItemDto) {
    return await this.cartDishService.update(updateCartDishDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.cartDishService.remove(+id);
  }
}
