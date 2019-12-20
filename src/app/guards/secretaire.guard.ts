import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthentificationService} from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class SecretaireGuard implements CanActivate {
  constructor(public authentificationService: AuthentificationService  , public router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authentificationService.isUserLogged() === true) {
      if (this.authentificationService.isUserLoggedAs('SECRETAIRE')) {
      // this.router.navigate(['adminhome']);
      return true; }}
    this.router.navigate(['login']);
    return false;
  }
}
