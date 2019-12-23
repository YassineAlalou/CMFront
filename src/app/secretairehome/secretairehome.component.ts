import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';
import {User} from '../classes/user';
import {Role} from '../classes/role';

@Component({
  selector: 'app-secretairehome',
  templateUrl: './secretairehome.component.html',
  styleUrls: ['./secretairehome.component.css']
})
export class SecretairehomeComponent implements OnInit {

  users;
  public user: User = new User();
  private repassword;
  public patients: any[];

  constructor(public router: Router, private authentificationService: AuthentificationService) {
    this.repassword = '';
  }

  ngOnInit() {
    this.authentificationService.getAllUsers().subscribe( ( data: any[] ) => {
      this.users = data;
      for (const val of this.users) {
       if (val.roles.length === 0) {
        console.log(val);
        this.patients = val;
      }
      }
    });
    console.log(this.patients);
  }
}
