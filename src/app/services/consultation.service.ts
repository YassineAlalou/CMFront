import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  url = 'http://localhost:8085/consultation';

  constructor(private http: HttpClient, private route: Router) { }

  save(co, ida){
    console.log("add object ===>>");
    console.log(co);
    return this.http.post(this.url + '/save/' + ida , {
        dateC: co.dateC,
        motif: co.motif,
        diagnostic: co.Diagnostic,
        price: co.price,
        typeConsultation: co.typeConsultation,
    }, {observe: 'response'});
  }

  getAll(){
    return this.http.get(this.url + "/all");
  }

  getConsultation(id){
    return this.http.get(this.url + "/" + id, {observe: 'response'});
  }

  delete(id){
    return this.http.delete(this.url + '/' + id, {observe: 'response'});
  }

  upadte(cons) {
    return this.http.put(this.url + '/' + cons.id, {
      id: cons.id,
      dateC: cons.dateC,
      motif: cons.motif,
      price: cons.price,
      diagnostic: cons.Diagnostic,
      typeConsultation: cons.typeConsultation,
    }, {observe: 'response'});
  }



}
