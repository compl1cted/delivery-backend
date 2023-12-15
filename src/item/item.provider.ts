import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { AbstractItemRepository, AbstractItemService } from "./item.interface";
import { ItemRepository } from "./item.repository";
import { ItemService } from "./item.service";
import { ITEM_TYPEORM_TOKEN } from "./item.consts";
import { ItemEntity } from "./item.entity";

export const ItemProviders: Provider[] = [
    {
        provide: ITEM_TYPEORM_TOKEN,
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(ItemEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: AbstractItemRepository,
        useClass: ItemRepository
    },
    {
        provide: AbstractItemService,
        useClass: ItemService
    }
]; 