import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { ICartRepository, ICartService } from "./cart.interface";
import { CartRepository } from "./cart.repository";
import { CartService } from "./cart.service";
import { CART_TYPEORM_TOKEN } from "./cart.consts";
import { CartEntity } from "./cart.entity";

export const CartProviders: Provider[] = [
    {
        provide: CART_TYPEORM_TOKEN,
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(CartEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: ICartRepository,
        useClass: CartRepository
    },
    {
        provide: ICartService,
        useClass: CartService
    }
]; 