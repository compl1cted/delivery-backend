import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { ICategoryRepository } from "./category.interface";
import { CreateCategoryDto, CategoryDto, UpdateCategoryDto, CategoryEntityToDto } from "./category.dto";
import { CATEGORY_TYPEORM_TOKEN } from "./category.consts";

@Injectable()
export class CategoryRepository implements ICategoryRepository {
    constructor(@Inject(CATEGORY_TYPEORM_TOKEN) private repository: Repository<CategoryEntity>) {}

    async create(createCategory: CreateCategoryDto): Promise<CategoryDto | null> {
        const categoryEntity = await this.repository.save(createCategory);
        if (!categoryEntity) {
            return null;
        }

        return CategoryEntityToDto(categoryEntity);
    }

    async findAll(): Promise<CategoryDto[]> {
        const categories = await this.repository.find();
        return categories.map(category => CategoryEntityToDto(category));
    }

    async findById(id: number): Promise<CategoryDto> {
        const category = await this.repository.findOneBy({id});
        return CategoryEntityToDto(category);
    }

    async update(updateCategory: UpdateCategoryDto): Promise<void> {
        const { id } = updateCategory;
        await this.repository.update(id, updateCategory);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}