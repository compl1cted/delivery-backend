import { PartialType } from '@nestjs/mapped-types';
import { ItemEntity } from './item.entity';

export class ItemDto {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

export class CreateItemDto {}

export class UpdateItemDto extends PartialType(ItemDto) {}

export const ItemEntityToDto = (entity: ItemEntity) => {
    const { id } = entity;

    return new ItemDto(id);
}

