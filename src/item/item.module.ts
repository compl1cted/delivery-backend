import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemProviders } from './item.provider';

@Module({
  controllers: [ItemController],
  providers: [...ItemProviders]
})
export class ItemModule {}
