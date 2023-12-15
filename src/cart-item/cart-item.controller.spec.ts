import { Test, TestingModule } from '@nestjs/testing';
import { CartDishController } from './cart-item.controller';
import { CartItemService } from './cart-item.service';

describe('CartDishController', () => {
  let controller: CartDishController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartDishController],
      providers: [CartItemService],
    }).compile();

    controller = module.get<CartDishController>(CartDishController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
