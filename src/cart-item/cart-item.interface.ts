import { CartItemDto, CreateCartItemDto, UpdateCartItemDto } from "./cart-item.dto";

export abstract class AbstractCartItemRepository {
    abstract create: (createCartDish: CreateCartItemDto) => Promise<CartItemDto>;
    abstract findAll: () => Promise<CartItemDto[]>;
    abstract findById: (id: number) => Promise<CartItemDto>;
    abstract update: (updateCartDish: UpdateCartItemDto) => Promise<void>;
    abstract remove: (id: number) => Promise<void>;
}

export abstract class AbstractCartItemService {
    abstract create: (createCartDish: CreateCartItemDto) => Promise<CartItemDto>;
    abstract findAll: () => Promise<CartItemDto[]>;
    abstract findById: (id: number) => Promise<CartItemDto>;
    abstract update: (updateCartDish: UpdateCartItemDto) => Promise<void>;
    abstract remove: (id: number) => Promise<void>;
}