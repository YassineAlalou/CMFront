import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class PatientGuard implements CanActivate {
  constructor(public authentificationService: AuthentificationService  , public router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authentificationService.isUserLogged() === true) {
      if (this.authentificationService.isUserLoggedAs('PATIENT')) {
        return true; }}
    this.router.navigate(['login']);
    return false;
  }
}
