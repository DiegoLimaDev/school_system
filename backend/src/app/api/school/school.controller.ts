import { Controller, Get } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolDomain } from '../../entities/school/school.domain';

//rota da api de escolas
@Controller('school')
export class SchoolController {
  constructor(private schoolService: SchoolService) {}

  //retorna todas as escolas
  @Get()
  async getAll(): Promise<SchoolDomain[]> {
    return await this.schoolService.getAll();
  }
}
