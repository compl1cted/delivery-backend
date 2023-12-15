import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { DatabaseEntity } from "src/database/databse.entity";
import { UserEntity } from "src/user/user.entity";
import { CartItemEntity } from "src/cart-item/cart-item.entity";
import { PaymentStatus } from "src/payment/payment.types";

@Entity()
export class OrderEntity extends DatabaseEntity {
    @OneToMany(() => CartItemEntity, cartItem => cartItem.cart)
    items: CartItemEntity[];

    @Column()
    price: number;

    @Column()
    address: string;

    @Column()
    delivery_time: Date;

    @Column({ default: PaymentStatus.PENDING })
    paymentStatus: PaymentStatus;

    @ManyToOne(() => UserEntity, user => user.orders)
    user: UserEntity;

    @Column()
    userId: number;
}
