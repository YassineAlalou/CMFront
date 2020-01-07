import { Component, OnInit } from '@angular/core';
import {Ordonnance} from '../classes/Ordonnance';
import {OrdonnanceService} from '../services/ordonnance.service';
import * as jsPDF from 'jspdf';
import {Rendezvous} from '../classes/rendezvous';
import {RendezvousService} from '../services/rendezvous.service';
declare var swal: any;


@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent implements OnInit {
  public ords;
  public ordate;
  public ord: Rendezvous = new Rendezvous();
  constructor(private ordonnanceService: OrdonnanceService, private rendezvousService: RendezvousService) { }

  ngOnInit() {
    this.rendezvousService.getAllRendezvous().subscribe((data: any) => {
      this.ords = data;
      console.log(data);
    });
    console.log(localStorage);

  }

  FindByDater(dater) {
    this.rendezvousService.getRendezvousByDater(dater).subscribe((data: any) => {
      if (data.body !== null) {
        console.log(data);
        this.ordate = data.body;
        console.log(this.ordate);
        swal('Consultation trouves', '', 'success'); }
      if (data.body.length === 0) {
        swal('Aucune consultation trouve', '', 'error'); }
    });
  }

  printPDF(id) {
    console.log(id);
    this.rendezvousService.getRendezvous(id).subscribe((data: any) => {
      this.ord = data;
      console.log(this.ord);
      this.ord.dater = data.body.dater;
      this.ord.diagnostic = data.body.diagnostic;
      this.ord.price = data.body.price ;
      this.ord.typeConsultation = data.body.typeConsultation;
      this.ord.id = data.body.id;
    });
    // console.log('pdf = >> ' + this.ords.consultation.id);
    const doc = new jsPDF();
    console.log(this.ord);
    doc.text('Cabinet Medical ', 80, 19);
    doc.text('Ordonnance : ' , 15, 40);
    doc.text('Medecin : ABID Hamza' , 120, 60);
    doc.text('Le  : ' + this.ord.dater, 20, 80);
    doc.text('Diagnostic : ' + this.ord.diagnostic, 20, 100);
    doc.text('Type de consultation : ' + this.ord.typeConsultation.libelle, 20, 120);
    doc.text('Montant : ' + this.ord.price, 20, 140);
    doc.text('Commentaire : ', 20, 160);
    doc.text('Signature : ', 100, 250);
    doc.save('OrdonnancePDF.pdf');
  }

  delete(id) {
    this.ordonnanceService.delete(id).subscribe((data: any) => {
      swal('Consultation Supprimé!', '', 'success');
      this.ordonnanceService.getAll().subscribe((data: any) => {
        this.ords = data;
      });
    });
  }
}

