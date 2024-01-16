import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from '../../entities/school/school.entity';
import { SchoolController } from './school.controller';

@Module({
  providers: [SchoolService],
  imports: [TypeOrmModule.forFeature([School])],
  exports: [SchoolService],
  controllers: [SchoolController],
})
export class SchoolModule {}
