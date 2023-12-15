import { Module } from '@nestjs/common';
import { CartDishController } from './cart-item.controller';
import { CartItemProviders } from './cart-item.provider';

@Module({
  controllers: [CartDishController],
  providers: [...CartItemProviders]
})
export class CartItemModule {}
