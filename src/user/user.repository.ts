import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { IUserRepository } from "./user.interface";
import { CreateUserDto, UserDto, UpdateUserDto, UserEntityToDto } from "./user.dto";
import { USER_TYPEORM_TOKEN } from "./user.consts";

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(@Inject(USER_TYPEORM_TOKEN) private repository: Repository<UserEntity>) {}

    async create(createUser: CreateUserDto): Promise<UserDto | null> {
        const userEntity = await this.repository.save(createUser);
        if (!userEntity) {
            return null;
        }

        return UserEntityToDto(userEntity);
    }

    async findAll(): Promise<UserDto[]> {
        const users = await this.repository.find();
        return users.map(user => UserEntityToDto(user));
    }

    async findById(id: number): Promise<UserDto> {
        const user = await this.repository.findOneBy({id});
        return UserEntityToDto(user);
    }

    async update(updateUser: UpdateUserDto): Promise<void> {
        const { id } = updateUser;
        await this.repository.update(id, updateUser);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}