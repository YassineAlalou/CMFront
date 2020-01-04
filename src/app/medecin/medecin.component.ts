import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MedecinService} from '../services/medecin.service';
import {Medecin} from '../classes/medecin';
declare var swal: any;

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {

  public medecins;
  public medecin: Medecin = new Medecin();
  private editer = false;

  constructor(public router: Router, private medecinService: MedecinService) { }

  ngOnInit() {
      this.medecinService.getAllMedecins().subscribe( ( data: any[] ) => {
        this.medecins = data;
        console.log(this.medecins);
      });
  }

  ajouterMedecin(e) {
    e.preventDefault();
    this.medecinService.ajouterMedecin(this.medecin).subscribe(( data ) => {
      console.log(data);
      console.log(this.medecin);
      this.medecins.push(this.medecin);
      this.medecin = new Medecin();
      swal('Medecin ajouté!', '', 'success');
      this.medecinService.getAllMedecins().subscribe( (data : any[] ) => {
        this.medecins = data;
      });
    });
  }

  deleteMedecin(id: any) {
    this.medecinService.deleteMedecin(id).subscribe(( data) => {
      swal('Medecin Supprimé!', '', 'success');
      this.medecinService.getAllMedecins().subscribe( ( data: any[] ) => {
        this.medecins = data;
      });
    });
  }






}
