import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../classes/user';
import {AuthentificationService} from '../services/authentification.service';

declare var swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User()  ;
  private userRegiter: User = new User();
  private repassword;
  private users;

  constructor(private authentificationService: AuthentificationService ,  public router: Router) {
    this.user.username = 'Login';
    this.user.password = '*********';
    this.userRegiter.username = 'Login';
    this.userRegiter.password = '*********';
    this.repassword = '*********';
  }

  ngOnInit() {
    document.body.style.background = '#FFFF';
    if (this.authentificationService.isUserLogged()) {
      this.router.navigate(['adminhome']);
    }

    this.authentificationService.getAllUsers().subscribe( ( data: any[] ) => {
      this.users = data;
      console.log(this.users);
    });

  }


  login() {
    this.authentificationService.login(this.user);
  }



}
