import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TeachersDomain } from '../teachers/teachers.domain';

export class SchoolDomain {
  @IsNotEmpty()
  @IsString()
  schoolName: string;

  @IsNotEmpty()
  @IsString()
  schoolAddress: string;

  @IsNotEmpty()
  @IsNumber()
  usertype: number;

  @IsArray()
  teachers: TeachersDomain[];
}
