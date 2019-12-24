import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MedicamentService} from '../services/medicament.service';
import {Medicament} from '../classes/medicament';
import {User} from '../classes/user';
declare var swal: any;

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit {

  public medicaments;
  public medicament: Medicament = new Medicament();
  private editer = false;

  constructor(public router: Router, private medicamentService: MedicamentService) { }

  ngOnInit() {
    this.medicamentService.getAllMedicaments().subscribe( ( data: any[] ) => {
      this.medicaments = data;
      console.log(this.medicaments);
    });
  }

  ajouterMedicament(e) {
    e.preventDefault();
    this.medicamentService.ajouterMedicament(this.medicament).subscribe(( data ) => {
      console.log(data);
      console.log(this.medicament);
      this.medicaments.push(this.medicament);
      this.medicament = new Medicament();
      swal('Medicament ajouté!', '', 'success');
      this.medicamentService.getAllMedicaments().subscribe( (data : any[] ) => {
        this.medicaments = data;
      });
    });
  }

  deleteMedicament(id: any) {
    this.medicamentService.deleteMedicament(id).subscribe(( data) => {
      swal('Medicament Supprimé!', '', 'success');
      this.medicamentService.getAllMedicaments().subscribe( ( data: any[] ) => {
        this.medicaments = data;
      });
    });
  }

  editerMedicament(id) {
    this.editer = true;
    this.medicamentService.getMedicament(id).subscribe((data: any) => {
      this.medicament.id = data.body.id;
      this.medicament.libelle = data.body.libelle;
      this.medicament.famille = data.body.famille;
      this.medicament.quantite = data.body.quantite;
      this.medicament.dateex = data.body.date;
      console.log(this.medicament);
    });
  }

  validerModification() {
    console.log(this.medicament);
    this.medicamentService.updateMedicament(this.medicament).subscribe((data) => {
      this.medicamentService.getAllMedicaments().subscribe((data: any[]) => {
        this.medicaments = data;
        console.log(data);
      });

    });

    this.editer = false;
    this.medicament = new Medicament();

  }

}
