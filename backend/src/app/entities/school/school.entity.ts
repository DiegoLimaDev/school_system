import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Teacher } from '../teachers/teachers.entity';
import { TeachersDomain } from '../teachers/teachers.domain';

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  schoolName: string;

  @Column()
  schoolAddress: string;

  @Column()
  usertype: number;

  @OneToMany(() => Teacher, (teacher) => teacher.name)
  teachers: TeachersDomain[];
}
