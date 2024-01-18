import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import * as bcrypt from 'bcrypt';
import { AdminDomain } from 'src/app/entities/admin/admin.domain';

//rota do login
@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  //post usado no login
  @Post()
  async validate(
    @Body('cpf')
    cpf: string,
    @Body('password') password: string,
    @Body('usertype') usertype: number,
  ): Promise<AdminDomain | undefined> {
    //login para usuário admin
    if (usertype === 0) {
      const admin = await this.loginService.validateAdmin(cpf);

      if (!admin) throw new BadRequestException('bad credentials');

      if (!(await bcrypt.compare(password, admin.password)))
        throw new BadRequestException('bad credentials');

      return admin;
    }

    //login para usuário pofessor
    if (usertype === 2) {
      const teacher = await this.loginService.validateTeacher(cpf);

      if (!teacher) throw new BadRequestException('bad credentials');

      if (!(await bcrypt.compare(password, teacher.password)))
        throw new BadRequestException('bad credentials');

      return teacher;
    }

    throw new BadRequestException('bad credentials');
  }
}
