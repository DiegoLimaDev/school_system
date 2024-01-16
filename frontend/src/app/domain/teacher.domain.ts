import { SchoolDomain } from './school.domain';

export interface TeacherDomain {
  cpf: string;

  name: string;

  password: string;

  usertype: number;

  id: number;

  school: SchoolDomain;
}
