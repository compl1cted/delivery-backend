import { Column, Entity, OneToMany } from "typeorm";
import { DatabaseEntity } from "src/database/databse.entity";
import { ItemEntity } from "src/item/item.entity";

@Entity()
export class CategoryEntity extends DatabaseEntity {
    @Column()
    name: string;

    @OneToMany(() => ItemEntity, item => item.category)
    items: ItemEntity[];
}
