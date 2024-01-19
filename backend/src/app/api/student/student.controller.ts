import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDomain } from 'src/app/entities/student/student.domain';

//rota da api estudante
@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  //retorna todos os estudates
  @Get()
  async getAll(): Promise<StudentDomain[]> {
    return await this.studentService.getAll();
  }

  //edita um estudante existente usando o id para encontrá-lo
  @Patch(':id')
  async editStudent(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('birthday') birthday: string,
  ) {
    const date = `${birthday.slice(6, 10)}-${birthday.slice(
      3,
      5,
    )}-${birthday?.slice(0, 2)}`;

    return await this.studentService.editStudent(id, name, date);
  }

  //get de todos estudantes relacionados ao professor com determinado id
  @Get(':id')
  async getStudentByTeacherRelation(@Param('id') id: number): Promise<void> {
    return await this.studentService.findStudentsByTeacherRelation(id);
  }

  //rota para deletar o estudante
  @Delete('/delete/:id')
  async deleteStudent(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<{ deleted: boolean }> {
    const student = await this.studentService.findOneStudenById(id);

    if (!student)
      throw new BadRequestException(`Student with id ${id} not found`);

    await this.studentService.deleteStudent(id);
    return { deleted: true };
  }
}
