import { LoginDataDomain } from './loginData.domain';

export interface AdminDomain extends LoginDataDomain {
  usertype: number;
}
