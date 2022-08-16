import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class NFTEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  createdAt: Date;

  @Column()
  updateAt: Date;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  price: number;

  @Column()
  creatorId: string;

  @Column()
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
