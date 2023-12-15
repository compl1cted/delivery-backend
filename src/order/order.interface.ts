import { OrderDto, CreateOrderDto, UpdateOrderDto } from "./order.dto";

export abstract class IOrderRepository {
    abstract create: (createOrder: CreateOrderDto) => Promise<OrderDto>;
    abstract findAll: () => Promise<OrderDto[]>;
    abstract findById: (id: number) => Promise<OrderDto>;
    abstract update: (updateOrder: UpdateOrderDto) => Promise<void>;
    abstract remove: (id: number) => Promise<void>;
}

export abstract class IOrderService {
    abstract create: (createOrder: CreateOrderDto) => Promise<OrderDto>;
    abstract findAll: () => Promise<OrderDto[]>;
    abstract findById: (id: number) => Promise<OrderDto>;
    abstract update: (updateOrder: UpdateOrderDto) => Promise<void>;
    abstract remove: (id: number) => Promise<void>;
}