import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../../entities/admin/admin.entity';

@Module({
  providers: [AdminService],
  imports: [TypeOrmModule.forFeature([Admin])],
  exports: [AdminService],
})
export class AdminModule {}
