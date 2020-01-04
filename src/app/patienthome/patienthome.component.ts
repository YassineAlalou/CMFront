import { Component, OnInit } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { sampleData, displayDate } from './events-utc';
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

  constructor(private rendezvousService: RendezvousService, private authentificationService: AuthentificationService) { }

  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.rendezvousService.getAllRendezvous().subscribe((data: any[]) => {
      this.rendezvouss = data;
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

}

