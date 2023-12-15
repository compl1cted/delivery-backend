import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { ICategoryRepository, ICategoryService } from "./category.interface";
import { CategoryRepository } from "./category.repository";
import { CategoryService } from "./category.service";
import { CATEGORY_TYPEORM_TOKEN } from "./category.consts";
import { CategoryEntity } from "./category.entity";

export const CategoryProviders: Provider[] = [
    {
        provide: CATEGORY_TYPEORM_TOKEN,
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(CategoryEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: ICategoryRepository,
        useClass: CategoryRepository
    },
    {
        provide: ICategoryService,
        useValue: CategoryService
    }
];