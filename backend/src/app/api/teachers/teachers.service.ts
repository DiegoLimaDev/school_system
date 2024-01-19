import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from '../../entities/teachers/teachers.entity';
import { Repository } from 'typeorm';
import { TeachersDomain } from '../../entities/teachers/teachers.domain';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private teachersRepo: Repository<Teacher>,
  ) {}

  //cria um usuário professor
  async createTeacher(data: TeachersDomain): Promise<TeachersDomain> {
    return await this.teachersRepo.save(data);
  }

  //encontra um usuário professor pelo cpf
  async findOne(cpf: string): Promise<TeachersDomain> {
    return await this.teachersRepo.findOneBy({ cpf });
  }

  //retora todos os professores
  async getAllTeachers(): Promise<TeachersDomain[]> {
    return await this.teachersRepo.find();
  }

  //edita um professor
  async editTeacher(
    id: number,
    teacher: TeachersDomain,
  ): Promise<TeachersDomain> {
    await this.teachersRepo.update({ id }, teacher);
    return await this.teachersRepo.findOneBy({ id });
  }

  //delete um professor
  async deleteTeacher(id: number): Promise<{ deleted: boolean }> {
    if (await this.teachersRepo.delete({ id })) return { deleted: true };

    return { deleted: false };
  }
}
