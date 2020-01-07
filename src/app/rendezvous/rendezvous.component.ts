import { Component, OnInit } from '@angular/core';
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
  public editer;
  public  username;
  public dt = new Date().toISOString().slice(0, 10);


  constructor(private rendezvousService: RendezvousService, private authentificationService: AuthentificationService) { }


  ngOnInit() {
    this.Init();
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
        this.mesrdv = new Array();
        this.Init();
      });
    } else {swal('Date invalide', '', 'error'); }
    // this.Init();
  }

  deleteRendezvous(id: any) {
    this.rendezvousService.deleteRendezvous(id).subscribe(( data) => {
      swal('rendez-vous Supprimé!', '', 'success');
      this.mesrdv = new Array();
      this.Init();
    });

  }


  Init() {
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

  editerRendezvous(id) {
    this.editer = true;
    this.rendezvousService.getRendezvous(id).subscribe((data: any) => {
      this.rendezvous.id = data.body.id;
      this.rendezvous.dater = data.body.dater;
      this.rendezvous.motif = data.body.motif;
      this.rendezvous.user = data.body.user;
      console.log(this.mesrdv);
    });

  }

  validerModification() {
    console.log(this.rendezvous);
    this.rendezvousService.updateRendezvous(this.rendezvous).subscribe((data) => {
      this.mesrdv = new Array();
      this.Init();

    });

    this.editer = false;
    this.rendezvous = new Rendezvous();
  }






}
