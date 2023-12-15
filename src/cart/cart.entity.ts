import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { DatabaseEntity } from "src/database/databse.entity";
import { UserEntity } from "src/user/user.entity";
import { CartItemEntity } from "src/cart-item/cart-item.entity";

@Entity()
export class CartEntity extends DatabaseEntity {
    @OneToOne(() => UserEntity)
    user: UserEntity;

    @Column()
    userId: number;

    @OneToMany(() => CartItemEntity, cartDishEntity => cartDishEntity.cart)
    dishes: CartItemEntity[];
}
