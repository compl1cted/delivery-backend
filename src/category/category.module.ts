import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryProviders } from './category.provider';

@Module({
  controllers: [CategoryController],
  providers: [...CategoryProviders]
})
export class CategoryModule {}
