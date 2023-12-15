import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';
import { IOrderService } from './order.interface';
import { MailService } from 'src/mail/mail.service';
import { IUserService } from 'src/user/user.interface';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: IOrderService,
    private readonly userService: IUserService,
    private readonly mailService: MailService
    ) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const orderResult = await this.orderService.create(createOrderDto);
    const user = await this.orderService.findById(orderResult.userId);
    
    //Payment redirect

    return orderResult;
  }

  @Get()
  async findAll() {
    return await this.orderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.orderService.findById(+id);
  }

  @Patch(':id')
  async update(@Body() updateOrderDto: UpdateOrderDto) {
    return await this.orderService.update(updateOrderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.orderService.remove(+id);
  }
}
