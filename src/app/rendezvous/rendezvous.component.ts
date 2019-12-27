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

  title = 'Calendar' ;
  calendarPlugins = [dayGridPlugin] ;
  CalendarEvents: any[] = [];

  public rendezvouss;
  public rendezvous: Rendezvous = new Rendezvous();
  public clientEditer: Rendezvous = new Rendezvous();
  public editer = false;
  public users;
  public username;



  constructor(private rendezvousService: RendezvousService, private authentificationService: AuthentificationService) { }

  ngOnInit() {
    this.rendezvousService.getAllRendezvous().subscribe((data: any[]) => {
      this.rendezvouss = data;
      this.CalendarEvents = data;
      console.log(this.rendezvouss);
    });
    this.authentificationService.getAllUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  ajouterRendezvous(e) {
    e.preventDefault();
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
  }





}
