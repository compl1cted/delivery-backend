import { PartialType } from '@nestjs/mapped-types';
import { OrderEntity } from './order.entity';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PaymentStatus } from 'src/payment/payment.types';

export class OrderDto {
    id: number;
    price: number;
    address: string;
    orderTime: Date;
    deliveryTime: Date;
    paymentStatus: PaymentStatus;
    userId: number;

    constructor(id: number, price: number, address: string, order_time: Date, delivery_time: Date, paymentStatus: PaymentStatus, userId: number) {
        this.id = id;
        this.price = price;
        this.address = address;
        this.orderTime = order_time;
        this.deliveryTime = delivery_time;
        this.deliveryTime = delivery_time;
        this.paymentStatus = paymentStatus;
        this.userId = userId;
    }
}

export class CreateOrderDto {
    @IsNotEmpty()
    @IsNumber()
    price: number;
    @IsNotEmpty()
    @IsString()
    address: string;
    @IsNotEmpty()
    @IsDate()
    order_time: Date;
    @IsNotEmpty()
    @IsDate()
    delivery_time: Date;
    @IsNotEmpty()
    @IsNumber()
    userId: number;
}

export class UpdateOrderDto extends PartialType(OrderDto) {}

export const OrderEntityToDto = (entity: OrderEntity) => {
    const { id, price, address, created_at, delivery_time, paymentStatus, userId } = entity;

    return new OrderDto(id, price, address, created_at, delivery_time, paymentStatus, userId);
}