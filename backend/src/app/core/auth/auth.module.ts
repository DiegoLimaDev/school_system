import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminModule } from 'src/app/api/admin/admin.module';
import { TeachersModule } from 'src/app/api/teachers/teachers.module';

@Module({
  providers: [AuthService],
  imports: [AdminModule, TeachersModule],
  exports: [AuthService],
})
export class AuthModule {}
