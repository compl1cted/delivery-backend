import { CartEntity } from "src/cart/cart.entity";
import { DatabaseEntity } from "src/database/databse.entity";
import { ItemEntity } from "src/item/item.entity";
import { Entity, ManyToOne } from "typeorm";

@Entity()
export class CartItemEntity extends DatabaseEntity {
    @ManyToOne(() => CartEntity, cartEntity => cartEntity.dishes)
    cart: CartEntity;

    @ManyToOne(() => ItemEntity, itemEntity => itemEntity.dishes)
    item: CartEntity;
}
