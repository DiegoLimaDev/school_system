import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersDomain } from 'src/app/entities/teachers/teachers.domain';
import { SchoolService } from '../school/school.service';

//rota da api professores
@Controller('teachers')
export class TeachersController {
  constructor(
    private teacherService: TeachersService,
    private schoolService: SchoolService,
  ) {}

  //retorna um professor pelo cpf
  @Get(':cpf')
  async getOne(@Param('cpf') cpf: string): Promise<TeachersDomain> {
    const teacher = await this.teacherService.findOne(cpf);

    if (!teacher) throw new NotFoundException('teacher notfound');

    return teacher;
  }

  //retorna todos os professores
  @Get()
  async getAllTeachers(): Promise<TeachersDomain[]> {
    return await this.teacherService.getAllTeachers();
  }

  //rota de edição de professor
  @Patch(':id')
  async editTeacher(
    @Param('id', new ParseIntPipe()) id: number,
    @Body('cpf') cpf: string,
    @Body('name') name: string,
    @Body('schoolName') schoolName: string,
  ): Promise<TeachersDomain> {
    if (cpf.length !== 11)
      throw new BadRequestException('cpf must have 11 digits');

    const teacher = await this.teacherService.findOne(cpf);

    const school = await this.schoolService.getByName(schoolName);

    if (!teacher) throw new BadRequestException('teacher not found');

    await this.teacherService.editTeacher(id, {
      ...teacher,
      name,
      school,
    });

    return teacher;
  }

  //rota para deletar um professor
  @Delete('/delete/:id')
  async deleteTeacher(@Param('id') id: number): Promise<string> {
    if (await this.teacherService.deleteTeacher(id))
      return `Teacher with id ${id} deleted`;

    return `No teacher found with id ${id}`;
  }
}
