import { Component, OnInit } from '@angular/core';
import {ConsultationService} from '../services/consultation.service';
import {Consultation} from '../classes/consultation';
import {TypeserviceService} from '../services/typeservice.service';
import {RendezvousService} from '../services/rendezvous.service';
import {RendezvousComponent} from '../rendezvous/rendezvous.component';
import {Rendezvous} from '../classes/rendezvous';
declare var swal: any;

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  constructor(private rendezvousService: RendezvousService, private typeConsultationService: TypeserviceService) { }
  cons;
  public types;
  public rdvdater;
  public editer = false;
  public con: Rendezvous = new Rendezvous();


  ngOnInit() {
      this.rendezvousService.getAllRendezvous().subscribe((data: any) => {
        this.cons = data;
        console.log(this.cons);
      });
      this.typeConsultationService.getTypes().subscribe((data: any[]) => {
        console.log(data);
        this.types = data ;
        // this.cons.typeConsultation = data;
      });
  }

  FindByDater(dater) {
    this.rendezvousService.getRendezvousByDater(dater).subscribe((data: any) => {
      if (data.body !== null) {
        console.log(data);
        this.rdvdater = data.body;
        console.log(this.rdvdater);
        swal('Rendez-vous trouves', '', 'success'); }
      if (data.body.length === 0) {
        swal('Aucun Rendez-vous trouve', '', 'error'); }
    });
  }

  delete(id: any) {
      this.rendezvousService.deleteRendezvous(id).subscribe((data: any) => {
        swal('Consultation Supprimé!', '', 'success');
        this.rendezvousService.getAllRendezvous().subscribe(( data: any[]) => {
          this.cons = data;
        });
      });
  }

  editConsultation(id) {
    console.log(id);
    this.editer = true;
    this.rendezvousService.getRendezvous(id).subscribe((data:any) => {
      this.con.id = data.body.id;
      this.con.dater =  data.body.dater;
      this.con.diagnostic = data.body.diagnostic;
      this.con.motif = data.body.motif;
      this.con.price = data.body.price;
      this.con.user = data.body.user;
      this.con.typeConsultation = data.body.typeConsultation;
    });
  }

  validerModification() {
    console.log(this.con);
    this.rendezvousService.updateRendezvous(this.con).subscribe((data) => {
      this.rendezvousService.getAllRendezvous().subscribe(( data: any[]) => {
        this.cons = data;
      });
    });
    this.editer = false;
    this.con = new Rendezvous();
  }


}
