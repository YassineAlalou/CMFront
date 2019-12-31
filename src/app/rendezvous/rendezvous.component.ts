import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {RendezvousService} from '../services/rendezvous.service';
import {AuthentificationService} from '../services/authentification.service';
import {Rendezvous} from '../classes/rendezvous';

declare var swal: any;

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {


  public rendezvouss;
  public mesrdv = new Array();
  public rendezvous: Rendezvous = new Rendezvous();
  public users;
  public  username;
  public dt = new Date().toISOString().slice(0, 10);


  constructor(private rendezvousService: RendezvousService, private authentificationService: AuthentificationService) { }


  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.rendezvousService.getAllRendezvous().subscribe((data: any[]) => {
      this.rendezvouss = data;
      console.log(this.rendezvouss);
      for (const val of this.rendezvouss) {
        if (val.user.username === this.username) {
          this.mesrdv.push(val);
        }
      }
      console.log(this.mesrdv);
    });
    this.authentificationService.getAllUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  ajouterRendezvous(e) {
    e.preventDefault();
    console.log(this.rendezvous.dater);
    console.log(this.dt);
    if (this.rendezvous.dater > this.dt) {
    this.username = localStorage.getItem('username');
    this.rendezvousService.ajouterRendezvous(this.rendezvous , this.username).subscribe(( data ) => {
        console.log(data);
        this.rendezvouss.push(this.rendezvous);
        this.rendezvous = new Rendezvous();
        swal('rendez-vous ajouté!', '', 'success');
        this.rendezvousService.getAllRendezvous().subscribe( (data: any[] ) => {
          this.rendezvouss = data;
        });
      });
    } else {swal('Date invalide', '', 'error'); }

  }






}
