import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';
import {User} from '../classes/user';
import {Role} from '../classes/role';
declare var swal: any;
declare var $: any;
@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {

  users;
  public  roles;
  public user: User = new User();
  public userEditer: User = new User();
  public editer = false;
  private repassword;
  private username;
  private  role: Role = new Role();

  constructor(public router: Router, private authentificationService: AuthentificationService) {
    this.repassword = '';
  }

  ngOnInit() {

    this.username = localStorage.getItem('username');


    this.authentificationService.getAllUsers().subscribe( ( data: any[] ) => {
      this.users = data;
      console.log(this.users);
      console.log(this.users[2].roles[0].libelle);
    });
    this.authentificationService.getAllRoles().subscribe( ( data: any[] ) => {
      this.roles = data;
      console.log(this.roles);
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

  deleteUser(id: any) {
    this.authentificationService.deleteUser(id).subscribe(( data) => {
      swal('User Supprimé!', '', 'success');
      this.authentificationService.getAllUsers().subscribe( ( data: any[] ) => {
        this.users = data;
      });
    });
  }

  editerUser(id) {
    this.editer = true;
    this.authentificationService.getUser(id).subscribe((data: any) => {
      this.user.id = data.body.id;
      this.user.username = data.body.username;
      this.user.password = data.body.password;
      this.user.repassword = data.body.password;
      this.user.nom = data.body.nom;
      this.user.prenom = data.body.prenom;
      this.user.tel = data.body.tel;
      this.user.age = data.body.age;
      console.log(this.user);
    });
  }

  validerModification() {
    console.log(this.user);
    this.authentificationService.updateUser(this.user).subscribe((data) => {
      this.authentificationService.getAllUsers().subscribe((data: any[]) => {
        this.users = data;
        console.log(data);
      });

    });

    this.editer = false;
    this.user = new User();
  $('body').removeClass('modal-open');
  }






}
