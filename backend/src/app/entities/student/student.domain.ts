import { IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { TeachersDomain } from '../teachers/teachers.domain';

export class StudentDomain {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDateString()
  birthday: string;

  @IsArray()
  teachers: TeachersDomain[];
}
