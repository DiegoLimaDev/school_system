import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './app/core/login/login.module';
import { AdminModule } from './app/api/admin/admin.module';
import { RegisterModule } from './app/core/register/register.module';
import { AuthModule } from './app/core/auth/auth.module';
import { SchoolModule } from './app/api/school/school.module';
import { TeachersModule } from './app/api/teachers/teachers.module';
import { StudentModule } from './app/api/student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'consulticom-db',
      entities: [
        `\.entity\.ts$
      `,
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    LoginModule,
    AdminModule,
    RegisterModule,
    AuthModule,
    SchoolModule,
    TeachersModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
