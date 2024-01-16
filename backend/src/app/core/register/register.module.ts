import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { AdminModule } from 'src/app/api/admin/admin.module';
import { SchoolModule } from 'src/app/api/school/school.module';
import { TeachersModule } from 'src/app/api/teachers/teachers.module';
import { StudentModule } from 'src/app/api/student/student.module';

@Module({
  providers: [RegisterService],
  controllers: [RegisterController],
  imports: [AdminModule, SchoolModule, TeachersModule, StudentModule],
})
export class RegisterModule {}
