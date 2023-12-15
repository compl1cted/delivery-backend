import { PartialType } from '@nestjs/mapped-types';
import { CategoryEntity } from './category.entity';

export class CategoryDto {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class CreateCategoryDto {

}

export class UpdateCategoryDto extends PartialType(CategoryDto) {}

export const CategoryEntityToDto = (entity: CategoryEntity) => {
    const {id, name} = entity;

    return new CategoryDto(id, name);
}