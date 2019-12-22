import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';
import {User} from '../classes/user';
declare var swal: any;
@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {

  public  users;
  public user: User = new User();
  public userEditer: User = new User();
  public editer = false;
  private repassword;

  constructor(public router: Router, private authentificationService: AuthentificationService) {
    this.repassword = '*********';
  }

  ngOnInit() {
    this.authentificationService.getAllUsers().subscribe( ( data: any[] ) => {
      this.users = data;
      console.log(this.users);
    });
  }

  ajouterUser(e) {
    e.preventDefault();
    this.authentificationService.ajouterUser(this.user).subscribe(( data ) => {
        console.log(data);
        console.log(this.user);
        this.users.push(this.user);
        this.user = new User();
        swal('Secretaire ajoutée!', '', 'success');
        this.authentificationService.getAllUsers().subscribe( (data : any[] ) => {
          this.users = data;
        });
      });
  }

}
