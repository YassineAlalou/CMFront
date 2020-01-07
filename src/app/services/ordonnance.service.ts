import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {
  url = 'http://localhost:8085/ordonnance';
  constructor(private http: HttpClient, private route: Router) { }

  getAll() {
    return this.http.get(this.url + '/all');
  }

  save(or, ida) {
    console.log('ordonnance service => ' + ida);
    return this.http.post(this.url + '/save/' + ida, {
      dateOr: or.dateOr,
      cons: or.cons,
    }, {observe: 'response'});
  }

  getOrdonnace(id) {
    return this.http.get(this.url + '/' + id, {observe: 'response'});
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id, {observe: 'response'});
  }

  update(or) {
    return this.http.put(this.url + '/' + or.id, {
      id: or.id,
      dateOr: or.dateOr,
      cons: or.cons,
    }, {observe: 'response'});
  }
}
