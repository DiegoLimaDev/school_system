import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryColumn({ unique: true, length: 11 })
  cpf: string;

  @Column()
  password: string;

  @Column()
  usertype: number;
}
