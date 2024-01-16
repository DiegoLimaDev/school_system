import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/app/entities/student/student.entity';
import { StudentController } from './student.controller';

@Module({
  providers: [StudentService],
  imports: [TypeOrmModule.forFeature([Student])],
  exports: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
