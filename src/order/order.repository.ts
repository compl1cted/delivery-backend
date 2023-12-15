import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm";
import { OrderEntity } from "./order.entity";
import { IOrderRepository } from "./order.interface";
import { CreateOrderDto, OrderDto, UpdateOrderDto, OrderEntityToDto } from "./order.dto";
import { ORDER_TYPEORM_TOKEN } from "./order.consts";

@Injectable()
export class OrderRepository implements IOrderRepository {
    constructor(@Inject(ORDER_TYPEORM_TOKEN) private repository: Repository<OrderEntity>) {}

    async create(createOrder: CreateOrderDto): Promise<OrderDto | null> {
        const orderEntity = await this.repository.save(createOrder);
        if (!orderEntity) {
            return null;
        }

        return OrderEntityToDto(orderEntity);
    }

    async findAll(): Promise<OrderDto[]> {
        const orders = await this.repository.find();
        return orders.map(order => OrderEntityToDto(order));
    }

    async findById(id: number): Promise<OrderDto> {
        const order = await this.repository.findOneBy({id});
        return OrderEntityToDto(order);
    }

    async update(updateOrder: UpdateOrderDto): Promise<void> {
        const { id } = updateOrder;
        await this.repository.update(id, updateOrder);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}