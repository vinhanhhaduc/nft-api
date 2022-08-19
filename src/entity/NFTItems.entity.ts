import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Collection } from './collection.entity';
import { Trait } from './trait.entity';
@Entity()
export class NFTItems {
  @ManyToOne(() => Collection, (collection: Collection) => collection.id)
  collection: Collection;

  @OneToOne(() => Trait, (trait: Trait) => trait.id)
  trait: Trait;

  @PrimaryGeneratedColumn()
  id: string;

  @Column({ default: null, type: 'timestamptz', nullable: false })
  createdAt: Date;

  @Column({ default: null, type: 'timestamptz', nullable: false })
  updateAt: Date;

  @Column({ default: '', nullable: false })
  name: string;

  @Column()
  address: string;

  @Column({
    type: 'numeric',
    default: 0,
    nullable: true,
  })
  price: number;

  @Column()
  creatorId: string;

  @Column({ default: '', nullable: true })
  description: string;

  @Column()
  collectionId: string;

  @Column()
  ownerId: string;

  @Column()
  mediaUrl: string;

  @Column()
  traitId: string;
}
