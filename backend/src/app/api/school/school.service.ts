import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { School } from '../../entities/school/school.entity';
import { Repository } from 'typeorm';
import { SchoolDomain } from '../../entities/school/school.domain';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private schoolRepo: Repository<School>,
  ) {}

  //cria uma escola
  async create(data: SchoolDomain): Promise<SchoolDomain> {
    return await this.schoolRepo.save(data);
  }

  //retorna todas as escolas
  async getAll(): Promise<SchoolDomain[]> {
    return await this.schoolRepo.find();
  }

  //encontra a escola pelo nome
  async getByName(schoolName: string): Promise<SchoolDomain> {
    return await this.schoolRepo.findOneBy({ schoolName });
  }
}
