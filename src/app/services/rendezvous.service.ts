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

  getAllRendezvous(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'rendezvous/all');
  }

  ajouterRendezvous(rendezvous , un) {
    return this.http.post(this.url + 'rendezvous/' + un, {
      dater: rendezvous.dater,
      motif: rendezvous.motif,
    }, {observe: 'response'});
  }

  deleteRendezvous(id) {
    console.log(id);
    return this.http.delete(this.url + '/' + id, { observe: 'response'});
  }

  getRendezvous(id) {
    return this.http.get(this.url + '/' + id , { observe: 'response'});
  }


}
