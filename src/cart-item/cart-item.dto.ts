import { PartialType } from '@nestjs/mapped-types';
import { CartItemEntity } from './cart-item.entity';

export class CartItemDto {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

export class CreateCartItemDto {}

export class UpdateCartItemDto extends PartialType(CartItemDto) {}

export const CartItemEntityToDto = (entity: CartItemEntity) => {
    const { id } = entity;

    return new CartItemDto(id);
}

