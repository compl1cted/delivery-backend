import { PartialType } from '@nestjs/mapped-types';
import { UserEntity } from './user.entity';

export class UserDto {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

export class CreateUserDto {}

export class UpdateUserDto extends PartialType(UserDto) {}

export const UserEntityToDto = (entity: UserEntity) => {
    const { id } = entity;

    return new UserDto(id);
}

