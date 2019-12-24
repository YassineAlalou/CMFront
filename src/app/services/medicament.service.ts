import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  url = 'http://localhost:8085/';

  constructor(private http: HttpClient, public router: Router) { }

  getAllMedicaments() {
    return this.http.get(this.url + 'medicament/all');
  }

  ajouterMedicament(medicament) {
    return this.http.post(this.url + 'medicament/save' , {
      libelle: medicament.libelle,
      famille: medicament.famille,
      quantite: medicament.quantite,
      dateex: medicament.dateex,
    }, {observe: 'response'});
  }

  deleteMedicament(id: any) {
    console.log(id);
    return this.http.delete(this.url + 'medicament/' + id, { observe: 'response'});
  }

  updateMedicament(medicament) {
    console.log('medicament update', medicament);
    return this.http.put(this.url + 'medicament/' + medicament.id, {
        libelle: medicament.libelle,
        famille: medicament.famille,
        quantite: medicament.quantite,
        dateex: medicament.dateex
      },
      { observe: 'response'});
  }

  getMedicament(id) {
    return this.http.get(this.url + 'medicament/' + id , { observe: 'response'});
  }
}
