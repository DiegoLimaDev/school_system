import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AdminDomain {
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  usertype: number;
}
