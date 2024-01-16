import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { AdminDomain } from 'src/app/entities/admin/admin.domain';
import { TeachersDomain } from 'src/app/entities/teachers/teachers.domain';

//injeta o serviço de autenticação
@Injectable()
export class LoginService {
  constructor(private authService: AuthService) {}

  //validação admin
  async validateAdmin(cpf: string): Promise<AdminDomain> {
    return await this.authService.validateAdmin(cpf);
  }

  //validação professor
  async validateTeacher(cpf: string): Promise<TeachersDomain> {
    return await this.authService.validateTeacher(cpf);
  }
}
