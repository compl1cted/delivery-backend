import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm";
import { AbstractItemRepository } from "./item.interface";
import { ItemEntity } from "./item.entity";
import { CreateItemDto, ItemDto, UpdateItemDto, ItemEntityToDto } from "./item.dto";
import { ITEM_TYPEORM_TOKEN } from "./item.consts";

@Injectable()
export class ItemRepository implements AbstractItemRepository {
    constructor(@Inject(ITEM_TYPEORM_TOKEN) private repository: Repository<ItemEntity>) {}

    async create(createItem: CreateItemDto): Promise<ItemDto | null> {
        const itemEntity = await this.repository.save(createItem);
        if (!itemEntity) {
            return null;
        }

        return ItemEntityToDto(itemEntity);
    }

    async findAll(): Promise<ItemDto[]> {
        const items = await this.repository.find();
        return items.map(item => ItemEntityToDto(item));
    }

    async findById(id: number): Promise<ItemDto> {
        const dish = await this.repository.findOneBy({id});
        return ItemEntityToDto(dish);
    }

    async update(updateItem: UpdateItemDto): Promise<void> {
        const { id } = updateItem;
        await this.repository.update(id, updateItem);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}