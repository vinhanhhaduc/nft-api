import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { NFTItems } from './NFTItems.entity';
@Entity()
export class User {
  @OneToMany(() => NFTItems, (nftItems: NFTItems) => nftItems.id)
  nftItems: NFTItems;
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

  @Column()
  nftItemId: string;
}
