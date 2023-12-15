import { CartDto, CreateCartDto, UpdateCartDto } from "./cart.dto";

export abstract class ICartRepository {
    abstract create: (createCart: CreateCartDto) => Promise<CartDto>;
    abstract findAll: () => Promise<CartDto[]>;
    abstract findById: (id: number) => Promise<CartDto>;
    abstract update: (updateCart: UpdateCartDto) => Promise<void>;
    abstract remove: (id: number) => Promise<void>;
}

export abstract class ICartService {
    abstract create: (createCart: CreateCartDto) => Promise<CartDto>;
    abstract findAll: () => Promise<CartDto[]>;
    abstract findById: (id: number) => Promise<CartDto>;
    abstract update: (updateCart: UpdateCartDto) => Promise<void>;
    abstract remove: (id: number) => Promise<void>;
}