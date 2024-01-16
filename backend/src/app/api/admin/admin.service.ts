import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../../entities/admin/admin.entity';
import { Repository } from 'typeorm';
import { AdminDomain } from '../../entities/admin/admin.domain';

@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private adminRepo: Repository<Admin>) {}

  //cria usuário admin
  async create(data: AdminDomain): Promise<AdminDomain> {
    return await this.adminRepo.save(data);
  }

  //encontra o usuário admin no banco
  async findOne(cpf: string): Promise<AdminDomain> {
    return await this.adminRepo.findOneBy({ cpf });
  }
}
