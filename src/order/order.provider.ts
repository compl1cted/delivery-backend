import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { IOrderRepository, IOrderService } from "./order.interface";
import { OrderRepository } from "./order.repository";
import { OrderService } from "./order.service";
import { ORDER_TYPEORM_TOKEN } from "./order.consts";
import { OrderEntity } from "./order.entity";

export const OrderProviders: Provider[] = [
    {
        provide: ORDER_TYPEORM_TOKEN,
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(OrderEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: IOrderRepository,
        useClass: OrderRepository
    },
    {
        provide: IOrderService,
        useClass: OrderService
    }
]; 