import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderProviders } from './order.provider';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [OrderController],
  providers: [...OrderProviders]
})
export class OrderModule {}
