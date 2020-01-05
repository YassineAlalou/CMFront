import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MedecinService} from '../services/medecin.service';
import {Medecin} from '../classes/medecin';
import {Medicament} from '../classes/medicament';
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


  editerMedecin(id) {
    this.editer = true;
    this.medecinService.getMedecin(id).subscribe((data: any) => {
      this.medecin.id = data.body.id;
      this.medecin.nom = data.body.nom;
      this.medecin.prenom = data.body.prenom;
      this.medecin.specialite = data.body.specialite;
      this.medecin.adresse = data.body.adresse;
      this.medecin.infos = data.body.infos;
      console.log(this.medecin);
    });
  }

  validerModification() {
    console.log(this.medecin);
    this.medecinService.updateMedecin(this.medecin).subscribe((data) => {
      this.medecinService.getAllMedecins().subscribe((data: any[]) => {
        this.medecins = data;
        console.log(data);
      });

    });

    this.editer = false;
    this.medecin = new Medecin();

  }




}
