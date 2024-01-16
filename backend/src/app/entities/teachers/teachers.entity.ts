import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { School } from '../school/school.entity';
import { SchoolDomain } from '../school/school.domain';
import { Student } from '../student/student.entity';
import { StudentDomain } from '../student/student.domain';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 11 })
  cpf: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  usertype: number;

  @ManyToOne(() => School, (school) => school.schoolName)
  school: SchoolDomain;

  @ManyToMany(() => Student, (student) => student.id)
  students: StudentDomain[];
}
