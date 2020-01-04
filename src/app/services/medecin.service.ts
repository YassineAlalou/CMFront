import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  url = 'http://localhost:8085/';

  constructor(private http: HttpClient, public router: Router) { }

  getAllMedecins() {
    return this.http.get(this.url + 'medecin/all');
  }

  getMedecin(id) {
    return this.http.get(this.url + 'medecin/' + id , { observe: 'response'});
  }

  deleteMedecin(id: any) {
    console.log(id);
    return this.http.delete(this.url + 'medecin/' + id, { observe: 'response'});
  }

  ajouterMedecin(medecin) {
    return this.http.post(this.url + 'medecin/save' , {
      nom: medecin.nom,
      prenom: medecin.prenom,
      specialite: medecin.specialite,
      adresse: medecin.adresse,
      infos: medecin.infos,
    }, {observe: 'response'});
  }

  updateMedecin(medecin) {
    console.log('medecin update', medecin);
    return this.http.put(this.url + 'medecin/' + medecin.id, {
        nom: medecin.nom,
        prenom: medecin.prenom,
        specialite: medecin.specialite,
        adresse: medecin.adresse,
        infos: medecin.infos,
      },
      { observe: 'response'});
  }

}
