import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { AdminService } from './app/api/admin/admin.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private adminService: AdminService) {}

  //Verifica se há um usuário admin padrão, caso não cria o usuário
  async onApplicationBootstrap() {
    const admin = await this.adminService.findOne('00000000000');

    if (!admin) {
      const password = await bcrypt.hash('123456', 10);

      await this.adminService.create({
        cpf: '00000000000',
        password: password,
        usertype: 0,
      });
    }
  }
}
