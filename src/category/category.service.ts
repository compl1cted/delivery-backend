import { Injectable } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { ICategoryRepository, ICategoryService } from './category.interface';

@Injectable()
export class CategoryService implements ICategoryService {
  constructor (private readonly categoryRepository: ICategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryRepository.create(createCategoryDto);
  }
  
  async findAll() {
    return await this.categoryRepository.findAll();
  }

  async findById(id: number) {
    return await this.categoryRepository.findById(id);
  }

  async update(updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryRepository.update(updateCategoryDto);
  }

  async remove(id: number) {
    return await this.categoryRepository.remove(id);
  }
}
