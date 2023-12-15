import { PartialType } from '@nestjs/mapped-types';
import { CartEntity } from './cart.entity';

export class CartDto {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

export class CreateCartDto {}

export class UpdateCartDto extends PartialType(CartDto) {}

export const CartEntityToDto = (entity: CartEntity) => {
    const { id } = entity;
    return new CartDto(id);
}
