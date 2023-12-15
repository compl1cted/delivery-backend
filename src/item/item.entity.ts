import { Column, Entity, ManyToOne } from "typeorm";
import { DatabaseEntity } from "src/database/databse.entity";
import { CategoryEntity } from "src/category/category.entity";

@Entity()
export class ItemEntity extends DatabaseEntity {
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    photoPath: string;

    @ManyToOne(() => CategoryEntity, category => category.items)
    category: CategoryEntity;

    @Column()
    categoryId: number;
}
