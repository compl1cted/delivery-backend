import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { ItemModule } from './item/item.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';
import { AppConfig } from './config/app.config';
import { DatabaseModule } from './database/database.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot(AppConfig),
    DatabaseModule,
    OrderModule,
    UserModule,
    ItemModule,
    CartModule,
    CartItemModule,
    CategoryModule,
    PaymentModule
  ]
})
export class AppModule {}
