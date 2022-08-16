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
  speed: string;

  @Column()
  power: string;
}
