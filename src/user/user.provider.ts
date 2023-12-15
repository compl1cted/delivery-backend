import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { IUserRepository, IUserService } from "./user.interface";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";
import { USER_TYPEORM_TOKEN } from "./user.consts";
import { UserEntity } from "./user.entity";

export const UserProviders: Provider[] = [
    {
        provide: USER_TYPEORM_TOKEN,
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(UserEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: IUserRepository,
        useClass: UserRepository
    },
    {
        provide: IUserService,
        useClass: UserService
    }
]; 