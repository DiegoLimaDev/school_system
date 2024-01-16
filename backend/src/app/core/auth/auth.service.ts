import { Injectable } from '@nestjs/common';
import { AdminService } from 'src/app/api/admin/admin.service';
import { TeachersService } from 'src/app/api/teachers/teachers.service';
import { AdminDomain } from 'src/app/entities/admin/admin.domain';
import { TeachersDomain } from 'src/app/entities/teachers/teachers.domain';

//serviço de validação para o login
@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private teacherService: TeachersService,
  ) {}

  //valida o usuário admin
  async validateAdmin(cpf: string): Promise<AdminDomain> {
    return await this.adminService.findOne(cpf);
  }

  //valida o usuário professor
  async validateTeacher(cpf: string): Promise<TeachersDomain> {
    return await this.teacherService.findOne(cpf);
  }
}
