import { Injectable } from '@nestjs/common';
import { CreateItemDto, ItemDto, UpdateItemDto } from './item.dto';
import { AbstractItemRepository, AbstractItemService } from './item.interface';

@Injectable()
export class ItemService implements AbstractItemService {
  constructor(private readonly itemRepository: AbstractItemRepository) {}

  async create(createItem: CreateItemDto) {
    return await this.itemRepository.create(createItem);
  }

  async findAll(): Promise<ItemDto[]> {
    return await this.itemRepository.findAll();
  }

  async findById(id: number): Promise<ItemDto> {
    return await this.itemRepository.findById(id);
  }

  async update(updateItem: UpdateItemDto) {
    return await this.itemRepository.update(updateItem);
  }

  async remove(id: number) {
    return await this.itemRepository.remove(id);
  }
}
