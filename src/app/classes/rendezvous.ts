import {User} from './user';
import {Typeconsultation} from './typeconsultation';

export class Rendezvous {
  public id: number;
  public dater: string;
  public motif: string;
  public diagnostic: string;
  public  price: number;
  public typeConsultation: Typeconsultation;
  public user: User;
}
