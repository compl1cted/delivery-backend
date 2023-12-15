import { Injectable } from '@nestjs/common';
import { CartItemDto, CreateCartItemDto, UpdateCartItemDto } from './cart-item.dto';
import { AbstractCartItemRepository, AbstractCartItemService } from './cart-item.interface';

@Injectable()
export class CartItemService implements AbstractCartItemService {
  constructor(private readonly cartItemRepository: AbstractCartItemRepository) {}

  async create(createCartItemDto: CreateCartItemDto): Promise<CartItemDto> {
    return await this.cartItemRepository.create(createCartItemDto);
  }

  async findAll() {
    return await this.cartItemRepository.findAll();
  }

  async findById(id: number) {
    return await this.cartItemRepository.findById(id);
  }

  async update(updateCartItemDto: UpdateCartItemDto) {
    return await this.cartItemRepository.update(updateCartItemDto);
  }

  async remove(id: number): Promise<void> {
    return await this.cartItemRepository.remove(id);
  }
}
