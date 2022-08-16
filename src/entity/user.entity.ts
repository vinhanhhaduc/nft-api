import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class UserEntity {
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
  nftItemId: string;
}
