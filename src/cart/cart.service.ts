import { Injectable } from '@nestjs/common';
import { CartDto, CreateCartDto, UpdateCartDto } from './cart.dto';
import { ICartRepository, ICartService } from './cart.interface';

@Injectable()
export class CartService implements ICartService {
  constructor(private readonly cartRepository: ICartRepository) {}

  async create(createCart: CreateCartDto) {
    return await this.cartRepository.create(createCart);
  }

  async findAll(): Promise<CartDto[]> {
    return await this.cartRepository.findAll();
  }

  async findById(id: number): Promise<CartDto> {
    return await this.cartRepository.findById(id);
  }

  async update(updateCartDto: UpdateCartDto): Promise<void> {
    return await this.cartRepository.update(updateCartDto);
  }

  async remove(id: number): Promise<void> {
    return await this.cartRepository.remove(id);
  }
}
