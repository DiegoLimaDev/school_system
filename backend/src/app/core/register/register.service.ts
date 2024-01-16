import { Injectable } from '@nestjs/common';
import { AdminService } from 'src/app/api/admin/admin.service';
import { SchoolService } from 'src/app/api/school/school.service';
import { StudentService } from 'src/app/api/student/student.service';
import { TeachersService } from 'src/app/api/teachers/teachers.service';
import { AdminDomain } from 'src/app/entities/admin/admin.domain';
import { SchoolDomain } from 'src/app/entities/school/school.domain';
import { StudentDomain } from 'src/app/entities/student/student.domain';
import { TeachersDomain } from 'src/app/entities/teachers/teachers.domain';

//injeção de todas entidades para seus respectivos cadastros
@Injectable()
export class RegisterService {
  constructor(
    private adminService: AdminService,
    private schoolService: SchoolService,
    private teachersService: TeachersService,
    private studentService: StudentService,
  ) {}

  //criação de usuário admin
  async createAdmin(data: AdminDomain): Promise<AdminDomain> {
    return await this.adminService.create(data);
  }

  //criação de escola
  async createSchool(data: SchoolDomain): Promise<SchoolDomain> {
    return await this.schoolService.create(data);
  }

  //encontra e retorna uma escola pelo nome
  async findSchool(schoolName: string): Promise<SchoolDomain> {
    return await this.schoolService.getByName(schoolName);
  }

  //criação de usuário professor
  async createTeacher(data: TeachersDomain): Promise<TeachersDomain> {
    return await this.teachersService.createTeacher(data);
  }

  //encontra e retorna um professor pelo cpf
  async findTeacher(cpf: string): Promise<TeachersDomain> {
    return await this.teachersService.findOne(cpf);
  }

  //cria um estudante
  async createStudent(data: StudentDomain): Promise<StudentDomain> {
    return await this.studentService.createStudent(data);
  }
}
