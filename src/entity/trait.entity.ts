import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { NFTItems } from './NFTItems.entity';
import { User } from './user.entity';
@Entity()
export class Trait {
  @OneToOne(() => NFTItems, (nftItems: NFTItems) => nftItems.id)
  nftItems: NFTItems;
  @ManyToOne(() => User, (user: User) => user.id)
  user: User;
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ default: null, type: 'timestamptz', nullable: false })
  createdAt: Date;

  @Column({ default: null, type: 'timestamptz', nullable: false })
  updateAt: Date;

  @Column()
  speed: string;

  @Column()
  power: string;
}
