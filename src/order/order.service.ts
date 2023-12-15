import { Injectable } from '@nestjs/common';
import { CreateOrderDto, OrderDto, UpdateOrderDto } from './order.dto';
import { IOrderRepository, IOrderService } from './order.interface';

@Injectable()
export class OrderService implements IOrderService {
  constructor (private readonly orderRepository: IOrderRepository) {}

  async create(createOrder: CreateOrderDto): Promise<OrderDto> {
    const order = await this.orderRepository.create(createOrder);
    
    return order;
  }

  async findAll(): Promise<OrderDto[]> {
    return await this.orderRepository.findAll();
  }

  async findById(id: number): Promise<OrderDto> {
    return await this.orderRepository.findById(id);
  }

  async update(updateOrder: UpdateOrderDto): Promise<void> {
    return await this.orderRepository.update(updateOrder);
  }

  async remove(id: number): Promise<void> {
    return await this.orderRepository.remove(id);
  }
}
