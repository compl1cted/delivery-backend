import { ItemDto, CreateItemDto, UpdateItemDto } from "./item.dto";

export abstract class AbstractItemRepository {
    abstract create: (createItem: CreateItemDto) => Promise<ItemDto>;
    abstract findAll: () => Promise<ItemDto[]>;
    abstract findById: (id: number) => Promise<ItemDto>;
    abstract update: (updateItem: UpdateItemDto) => Promise<void>;
    abstract remove: (id: number) => Promise<void>;
}

export abstract class AbstractItemService {
    abstract create: (createItem: CreateItemDto) => Promise<ItemDto>;
    abstract findAll: () => Promise<ItemDto[]>;
    abstract findById: (id: number) => Promise<ItemDto>;
    abstract update: (updateItem: UpdateItemDto) => Promise<void>;
    abstract remove: (id: number) => Promise<void>;
}