import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from '../../entities/teachers/teachers.entity';
import { TeachersController } from './teachers.controller';
import { SchoolModule } from '../school/school.module';

@Module({
  providers: [TeachersService],
  exports: [TeachersService],
  imports: [TypeOrmModule.forFeature([Teacher]), SchoolModule],
  controllers: [TeachersController],
})
export class TeachersModule {}
