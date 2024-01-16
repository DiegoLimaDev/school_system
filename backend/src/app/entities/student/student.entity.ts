import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Teacher } from '../teachers/teachers.entity';
import { TeachersDomain } from '../teachers/teachers.domain';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthday: string;

  @ManyToMany(() => Teacher, (teacher) => teacher.id, { cascade: true })
  @JoinTable()
  teachers: TeachersDomain[];
}
