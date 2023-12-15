import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { AbstractCartItemRepository, AbstractCartItemService } from "./cart-item.interface";
import { CartItemRepository } from "./cart-item.repository";
import { CartItemService } from "./cart-item.service";
import { CART_ITEM_TYPEORM_TOKEN } from "./cart-item.consts";
import { CartItemEntity } from "./cart-item.entity";

export const CartItemProviders: Provider[] = [
    {
        provide: CART_ITEM_TYPEORM_TOKEN,
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(CartItemEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: AbstractCartItemRepository,
        useClass: CartItemRepository
    },
    {
        provide: AbstractCartItemService,
        useClass: CartItemService
    }
]; 