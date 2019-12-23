import {Role} from './role';

export class User {
  id: number;
  username: string;
  password: string;
  repassword: string;
  nom: string;
  prenom: string;
  tel: string;
  age: number;
  role: Role;
}
