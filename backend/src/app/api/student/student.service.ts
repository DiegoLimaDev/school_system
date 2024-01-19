import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDomain } from 'src/app/entities/student/student.domain';
import { Student } from 'src/app/entities/student/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  //retorna todos os estudantes
  async getAll(): Promise<StudentDomain[]> {
    return await this.studentRepo.find();
  }

  //cria um estudante
  async createStudent(data: StudentDomain): Promise<StudentDomain> {
    return await this.studentRepo.save(data);
  }

  //edita um estudante existente fazendo o query pelo id
  async editStudent(
    id: number,
    name: string,
    birthday: string,
  ): Promise<StudentDomain> {
    await this.studentRepo.update({ id }, { name: name, birthday: birthday });
    return await this.studentRepo.findOneBy({ id });
  }

  //query para retornar todos estudantes relacionas ao professor com o parametro id
  async findStudentsByTeacherRelation(id: number): Promise<void> {
    return await this.studentRepo.query(`SELECT student.*
    FROM student
    JOIN student_teachers_teacher ON student.id = student_teachers_teacher."studentId"
    JOIN teacher ON teacher.id = student_teachers_teacher."teacherId"
    WHERE teacher.id = ${id};
    `);
  }

  //deleta um estudante da tabela
  async deleteStudent(id: number): Promise<{ deleted: boolean }> {
    try {
      await this.studentRepo.delete(id);
      return { deleted: true };
    } catch (error) {}
    return { deleted: false };
  }

  //encontra um estudante pelo id
  async findOneStudenById(id: number): Promise<StudentDomain> {
    return await this.studentRepo.findOneBy({ id });
  }
}
