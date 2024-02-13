

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CR {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;
  
  @Column()
  username: string;

  @Column()
  email: string;
  
  @Column()
  age : number;

  @Column()
  password: string;

  @Column()
  gender: string;


  @Column({ type: 'mediumblob', nullable: true }) 
  image: Buffer;
}
