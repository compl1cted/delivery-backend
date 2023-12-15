import { UserDto, CreateUserDto, UpdateUserDto } from "./user.dto";

export abstract class IUserRepository {
    abstract create: (createUser: CreateUserDto) => Promise<UserDto>;
    abstract findAll: () => Promise<UserDto[]>;
    abstract findById: (id: number) => Promise<UserDto>;
    abstract update: (updateUser: UpdateUserDto) => Promise<void>;
    abstract remove: (id: number) => Promise<void>;
}

export abstract class IUserService {
    abstract create: (createUser: CreateUserDto) => Promise<UserDto>;
    abstract findAll: () => Promise<UserDto[]>;
    abstract findById: (id: number) => Promise<UserDto>;
    abstract update: (updateUser: UpdateUserDto) => Promise<void>;
    abstract remove: (id: number) => Promise<void>;
}