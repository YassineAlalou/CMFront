import {Component, OnInit} from '@angular/core';
import {Rendezvous} from '../classes/rendezvous';
import {RendezvousService} from '../services/rendezvous.service';
import {AuthentificationService} from '../services/authentification.service';



@Component({
  selector: 'app-patienthome',
  templateUrl: './patienthome.component.html',
  styleUrls: ['./patienthome.component.css']
})
export class PatienthomeComponent implements OnInit {

  public rendezvouss;
  public mesrdv = new Array();
  public rendezvous: Rendezvous = new Rendezvous();
  public users;
  public username;
  public events;

  constructor(private rendezvousService: RendezvousService, private authentificationService: AuthentificationService) { }

  public calendarEvents ;
  public calendarOptions;

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.rendezvousService.getAllRendezvous().subscribe((data: any[]) => {
      this.rendezvouss = data;
      data.forEach(element => {
        this.calendarEvents = this.calendarEvents.concat({
          title: element.motif.toString(),
          // backgroundColor:"blue",
          start: element.datr,
          end: element.dater,
          allDay: true
        });
      });
    });
  }
}

