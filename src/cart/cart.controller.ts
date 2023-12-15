import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto, UpdateCartDto } from './cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Body() createCartDto: CreateCartDto) {
    return await this.cartService.create(createCartDto);
  }

  @Get()
  async findAll() {
    return await this.cartService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cartService.findById(+id);
  }

  @Patch(':id')
  async update(@Body() updateCartDto: UpdateCartDto) {
    return await this.cartService.update(updateCartDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.cartService.remove(+id);
  }
}
