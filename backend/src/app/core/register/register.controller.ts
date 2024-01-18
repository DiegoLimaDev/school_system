import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import * as bcrypt from 'bcrypt';
import { AdminDomain } from 'src/app/entities/admin/admin.domain';
import { SchoolDomain } from 'src/app/entities/school/school.domain';
import { TeachersDomain } from 'src/app/entities/teachers/teachers.domain';
import { StudentDomain } from 'src/app/entities/student/student.domain';

//rota comum à todos registros
@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  //rota de criação para o admin
  @Post('admin')
  async createAdmin(
    @Body('cpf') cpf: string,
    @Body('password') password: string,
  ): Promise<AdminDomain> {
    //verifica se a senha tem pelo menos 6 digítos
    if (password.length < 6)
      throw new BadRequestException('password must have 6 characters');

    //encrypt de senha
    const hashedPassword = await bcrypt.hash(password, 10);

    return await this.registerService.createAdmin({
      cpf: cpf,
      password: hashedPassword,
      usertype: 0,
    });
  }

  //rota de criação para escola
  @Post('school')
  async createSchool(
    @Body('schoolName') schoolName: string,
    @Body('schoolAddress') schoolAddress: string,
  ): Promise<SchoolDomain> {
    return await this.registerService.createSchool({
      schoolName: schoolName,
      schoolAddress: schoolAddress,
      usertype: 1,
      teachers: [],
    });
  }

  //rota de criação para usuário professor
  @Post('teacher')
  async createTeacher(
    @Body('cpf') cpf: string,
    @Body('name') name: string,
    @Body('schoolName') schoolName: string,
  ): Promise<TeachersDomain> {
    //seleção dos seis primeiros digitos do cpf para senha
    const password = cpf.substring(0, 6);

    //encrypt de senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const school = await this.registerService.findSchool(schoolName);

    if (!school) throw new BadRequestException('school not found');

    return await this.registerService.createTeacher({
      cpf: cpf,
      name: name,
      password: hashedPassword,
      school: school,
      usertype: 2,
      students: [],
    });
  }

  //rota de criação para estudante
  @Post('student')
  async createStudent(
    @Body('name') name: string,
    @Body('birthday') birthday: string,
    @Body('teacherCpf') teacherCpf: string,
  ): Promise<StudentDomain> {
    const teacher = await this.registerService.findTeacher(teacherCpf);

    if (!teacher) throw new BadRequestException('teacher not found');

    //formatação para string de data de nascimento
    const date = `${birthday.slice(6, 10)}-${birthday.slice(
      3,
      5,
    )}-${birthday.slice(0, 2)}`;

    return await this.registerService.createStudent({
      name: name,
      birthday: date,
      teachers: [teacher],
    });
  }
}
