import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import {User} from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  url = 'http://localhost:8085/';

  public temoin = false;
  public temoinRegister = false;

  constructor(private http: HttpClient, public router: Router) { }

  isUserLogged(): boolean {

    if  (localStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }

  isUserLoggedAs(role: string): boolean {
    for (const   r of this.nettoyerRoles() ) {
      if  (r === role) {
        return true;
      }
    }
    return false;
  }

  nettoyerRoles(): string[] {
    let Roles: string[];
    Roles = new Array();

    localStorage.getItem('roles').toString().split(',').forEach( (a) => {
      Roles.push(a);
    });
    return Roles;
  }

  login( user ) {
      return this.http.post(this.url + 'login', {
        username: user.username,
        password: user.password,
    },
        { observe: 'response'}).subscribe(response => {
        let tokendecoded = jwt_decode(response.headers.get('Authorization'));
        localStorage.setItem('token', response.headers.get('Authorization'));
        localStorage.setItem('username', tokendecoded.sub);
        console.log(tokendecoded);
        localStorage.setItem('roles', tokendecoded.roles);
        if (this.isUserLoggedAs('ADMIN')) {this.router.navigate(['adminhome']); }
        else if (this.isUserLoggedAs('SECRETAIRE')) {this.router.navigate(['secretairehome']); }
        else if (this.isUserLoggedAs('PATIENT')) {this.router.navigate(['patienthome']); }
    }, error  => {
      console.log('error');
      this.temoin = true;
    });

  }

  enregistrer(user, confirmation ) {
    console.log(user);
    this.temoin = false;
    return this.http.post(this.url + 'User/register', {
      nom: user.nom,
      prenom: user.prenom,
      tel: user.Tel,
      username: user.username,
      password: user.password,
      repassword : confirmation,
      age: user.Age
    }, { observe: 'response'}).subscribe(response => {

      let element: HTMLElement = document.getElementById('login') as HTMLElement;
      element.click();
      console.log(user);
      this.temoinRegister = true;
      this.router.navigate(['login']);
    },
        error  => {
      console.log(error);

    });

  }

  getAllUsers() {
    return this.http.get(this.url + 'User/all');
  }

  getAllRoles() {
    return this.http.get(this.url + 'Role/all');
  }

  ajouterUser(user) {
    return this.http.post(this.url + 'User/registerS' , {
      nom: user.nom,
      prenom: user.prenom,
      tel: user.Tel,
      username: user.username,
      password: user.password,
      repassword : user.repassword,
      age: user.Age
    }, {observe: 'response'});
  }

  deleteUser(id: any) {
    console.log(id);
    return this.http.delete(this.url + 'User/' + id, { observe: 'response'});

  }

  getUser(id) {
    return this.http.get(this.url + 'User/' + id , { observe: 'response'});
  }

  updateUser(user) {
    console.log('user update', user);
    return this.http.put(this.url + 'User/' + user.id, {
        nom: user.nom,
        prenom: user.prenom,
        tel: user.Tel,
        username: user.username,
        password: user.password,
        repassword : user.repassword,
        age: user.Age
      },
     { observe: 'response'});
  }


}
