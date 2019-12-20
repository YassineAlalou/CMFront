import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private  username;

  constructor(private authentificationService: AuthentificationService,  public router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }


  logout() {
    localStorage.clear();
    sessionStorage.clear();
    console.log(localStorage.getItem('token'));
    this.router.navigate(['login']);
  }

}
