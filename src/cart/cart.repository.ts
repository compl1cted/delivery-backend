import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm";
import { CartEntity } from "./cart.entity";
import { ICartRepository } from "./cart.interface";
import { CreateCartDto, CartDto, UpdateCartDto, CartEntityToDto } from "./cart.dto";
import { CART_TYPEORM_TOKEN } from "./cart.consts";

@Injectable()
export class CartRepository implements ICartRepository {
    constructor(@Inject(CART_TYPEORM_TOKEN) private repository: Repository<CartEntity>) {}

    async create(createCart: CreateCartDto): Promise<CartDto | null> {
        const cartEntity = await this.repository.save(createCart);
        if (!cartEntity) {
            return null;
        }

        return CartEntityToDto(cartEntity);
    }

    async findAll(): Promise<CartDto[]> {
        const carts = await this.repository.find();
        return carts.map(cart => CartEntityToDto(cart));
    }

    async findById(id: number): Promise<CartDto> {
        const cart = await this.repository.findOneBy({id});
        return CartEntityToDto(cart);
    }

    async update(updateCart: UpdateCartDto): Promise<void> {
        const { id } = updateCart;
        await this.repository.update(id, updateCart);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}