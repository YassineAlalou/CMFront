import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';
import {User} from '../classes/user';

@Component({
  selector: 'app-secretairehome',
  templateUrl: './secretairehome.component.html',
  styleUrls: ['./secretairehome.component.css']
})
export class SecretairehomeComponent implements OnInit {

  users;
  public user: User = new User();
  private repassword;

  public patients = new Array();

  constructor(public router: Router, private authentificationService: AuthentificationService) {
    this.repassword = '';
  }

  ngOnInit() {
  this.init();
  }

  Activer(username) {
    this.authentificationService.Activer(username).subscribe((data) => {
      this.init();

    });
  }

  init() {
    this.patients = new Array();
    this.authentificationService.getAllUsers().subscribe( ( data: any[] ) => {
     // this.users = data;
      for (const val of data) {
        if (val.roles.length === 0) {

          this.patients.push(val);
        }
      }
      this.authentificationService.getAllUsers().subscribe( ( data: any[] ) => {

        for (const val of data) {
          for (const val2 of val.roles) {
            if (val2.libelle === 'PATIENT') {
              console.log(val);
              this.patients.push(val);
            }
          }
        }
        console.log(this.patients);
      });

      console.log(this.patients);
    });

  }
}


