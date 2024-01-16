import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersDomain } from 'src/app/entities/teachers/teachers.domain';

//rota da api professores
@Controller('teachers')
export class TeachersController {
  constructor(private teacherService: TeachersService) {}

  //retorna um professor pelo cpf
  @Get(':cpf')
  async getOne(@Param('cpf') cpf: string): Promise<TeachersDomain> {
    const teacher = await this.teacherService.findOne(cpf);

    if (!teacher) throw new NotFoundException('teacher notfound');

    return teacher;
  }
}
