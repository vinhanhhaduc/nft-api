import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class CollectionEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  createdAt: Date;

  @Column()
  updateAt: Date;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column()
  mediaUrl: string;

  @Column()
  metaDataId: string;
}
