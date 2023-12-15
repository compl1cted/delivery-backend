import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartProviders } from './cart.provider';

@Module({
  controllers: [CartController],
  providers: [...CartProviders]
})
export class CartModule {}
