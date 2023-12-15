import { CategoryDto, CreateCategoryDto, UpdateCategoryDto } from "./category.dto";

export abstract class ICategoryRepository {
    abstract create: (createCategory: CreateCategoryDto) => Promise<CategoryDto>;
    abstract findAll: () => Promise<CategoryDto[]>;
    abstract findById: (id: number) => Promise<CategoryDto>;
    abstract update: (updateCategory: UpdateCategoryDto) => Promise<void>;
    abstract remove: (id: number) => Promise<void>;
}

export abstract class ICategoryService {
    abstract create: (createCategory: CreateCategoryDto) => Promise<CategoryDto>;
    abstract findAll: () => Promise<CategoryDto[]>;
    abstract findById: (id: number) => Promise<CategoryDto>;
    abstract update: (updateCategory: UpdateCategoryDto) => Promise<void>;
    abstract remove: (id: number) => Promise<void>;
}