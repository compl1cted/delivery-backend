import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm";
import { CartItemEntity } from "./cart-item.entity";
import { AbstractCartItemRepository } from "./cart-item.interface";
import { CreateCartItemDto, CartItemDto, UpdateCartItemDto, CartItemEntityToDto } from "./cart-item.dto";
import { CART_ITEM_TYPEORM_TOKEN } from "./cart-item.consts";

@Injectable()
export class CartItemRepository implements AbstractCartItemRepository {
    constructor(@Inject(CART_ITEM_TYPEORM_TOKEN) private repository: Repository<CartItemEntity>) {}

    async create(createCartItem: CreateCartItemDto): Promise<CartItemDto | null> {
        const cartItemEntity = await this.repository.save(createCartItem);
        if (!cartItemEntity) {
            return null;
        }

        return CartItemEntityToDto(cartItemEntity);
    }

    async findAll(): Promise<CartItemDto[]> {
        const entities = await this.repository.find();
        return entities.map(entity => CartItemEntityToDto(entity));
    }

    async findById(id: number): Promise<CartItemDto> {
        const entity = await this.repository.findOneBy({id});
        return CartItemEntityToDto(entity);
    }

    async update(updateCartItem: UpdateCartItemDto): Promise<void> {
        const { id } = updateCartItem;
        await this.repository.update(id, updateCartItem);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}