import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, UserDto } from './user.dto';
import { IUserRepository, IUserService } from './user.interface';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    return await this.userRepository.create(createUserDto);
  }

  async findAll(): Promise<UserDto[]> {
    return await this.userRepository.findAll();
  }

  async findById(id: number): Promise<UserDto> {
    return await this.userRepository.findById(id);
  }

  async update(updateUserDto: UpdateUserDto): Promise<void> {
    return await this.userRepository.update(updateUserDto);
  }

  async remove(id: number): Promise<void> {
    return await this.userRepository.remove(id);
  }
}
