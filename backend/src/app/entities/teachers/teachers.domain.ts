import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { SchoolDomain } from '../school/school.domain';
import { StudentDomain } from '../student/student.domain';

export class TeachersDomain {
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  @IsNotEmpty()
  usertype: number;

  @IsString()
  @IsNotEmpty()
  school: SchoolDomain;

  @IsArray()
  students: StudentDomain[];
}
