import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TypeserviceService {

  constructor(private http: HttpClient, public router: Router) { }

  url = 'http://localhost:8085/typeconsultation';

  save(type){
    console.log("inside service");
    return this.http.post(this.url + "/save", {
      libelle: type.libelle,
    },{observe: 'response'});
  }
  delete(id){
    return this.http.delete(this.url + "/" + id, {observe: 'response'});
  }

  getType(id){
    return this.http.get(this.url + "/" + id, {observe: 'response'});
  }
  getTypes(){
    return this.http.get(this.url + "/all");
  }

  updateType(type){
    return this.http.put(this.url + "/" + type.id, {
      id: type.id,
      libelle: type.libelle,
    }, {observe:'response'});
  }



}
