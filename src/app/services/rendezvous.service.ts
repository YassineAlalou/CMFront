import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  url = 'http://localhost:8085/';

  constructor(private http: HttpClient, public router: Router) { }

  getAllRendezvous() {
    return this.http.get (this.url + 'rendezvous/all');
}

  ajouterRendezvous(rendezvous , un) {
    return this.http.post(this.url + 'rendezvous/' + un, {
      dater: rendezvous.dater,
      motif: rendezvous.motif,
    }, {observe: 'response'});
  }

  deleteRendezvous(id) {
    console.log(id);
    return this.http.delete(this.url + 'rendezvous/' + id, { observe: 'response'});
  }

  getRendezvous(id) {
    return this.http.get(this.url + 'rendezvous/' + id , { observe: 'response'});
  }

  getRendezvousByDater(dater) {
    const d = dater.toString();
    return this.http.get(this.url + 'rendezvous/dat/' + d , { observe: 'response'});
  }

  updateRendezvous(rdv) {
    console.log('Rendez-vous update', rdv);
    return this.http.put(this.url + 'rendezvous/' + rdv.id, {
        id: rdv.id,
        dater: rdv.dater,
        motif: rdv.motif,
        diagnostic: rdv.diagnostic,
        price: rdv.price,
        user: rdv.user,
        typeConsultation: rdv.typeConsultation
      },
      { observe: 'response'});
  }


}
