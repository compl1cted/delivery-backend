import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { DatabaseEntity } from "src/database/databse.entity";
import { CartEntity } from "src/cart/cart.entity";
import { OrderEntity } from "src/order/order.entity";

@Entity()
export class UserEntity extends DatabaseEntity {
    @OneToOne(() => CartEntity)
    cart: CartEntity;

    @Column()
    cartId: number;

    @OneToMany(() => OrderEntity, order => order)
    orders: OrderEntity[]
}
