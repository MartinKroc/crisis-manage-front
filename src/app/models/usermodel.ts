import {Role} from './role';

export class UserModel {
  username: string;
  roles: [];
  role: Role;
  token?: string;
}
