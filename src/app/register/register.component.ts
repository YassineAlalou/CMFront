import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';
import {User} from '../classes/user';

declare var swal: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  private user: User = new User()  ;
  private userRegiter: User = new User();
  private repassword;


  constructor(private authentificationService: AuthentificationService ,  public router: Router) {
    this.user.username = 'Login';
    this.user.password = '*********';
    this.userRegiter.username = 'Login';
    this.userRegiter.password = '*********';
    this.repassword = '*********';
  }


  ngOnInit() {

  }

  register() {
    console.log(this.repassword);
    if (this.userRegiter.password === this.repassword) {
    this.authentificationService.enregistrer(this.userRegiter, this.repassword);
    } else {
      swal('Confirmez votre mot de passe svp!', '', 'error');
    }

  }
}
