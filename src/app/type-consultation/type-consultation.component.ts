import { Component, OnInit } from '@angular/core';
import {Typeconsultation} from '../classes/typeconsultation';
import {TypeserviceService} from '../services/typeservice.service';
import { Router} from '@angular/router';
declare var swal: any;

@Component({
  selector: 'app-type-consultation',
  templateUrl: './type-consultation.component.html',
  styleUrls: ['./type-consultation.component.css']
})
export class TypeConsultationComponent implements OnInit {
  public types: Typeconsultation[] = [];
  public type: Typeconsultation =  new Typeconsultation();
  public editer = false;
  constructor(public typeService: TypeserviceService, public routre: Router) { }
  ngOnInit() {
    this.typeService.getTypes().subscribe((data:any[]) =>{
      this.types = data;
    });
  }

  ajouterType(e){
    e.preventDefault();
    this.typeService.save(this.type).subscribe((data: any) =>{
      this.types.push(this.type);
      this.type =  new Typeconsultation();
      swal('TYPE ajoutée!', '', 'success');
      this.typeService.getTypes().subscribe((data: any[]) => {
        this.types = data;
      });
    });
  }
  deleteType(id){
    this.typeService.delete(id).subscribe((data: any) =>{
      swal('Type Supprimé!', '', 'success');
      this.typeService.getTypes().subscribe((data: any[]) =>{
        this.types = data;
      });
    });
  }

  editerType(id){
    this.editer = true;
    this.typeService.getType(id).subscribe((data: any) => {
      this.type.id = data.body.id;
      this.type.libelle = data.body.libelle;
    });
  }

  validerModification(){
    this.typeService.updateType(this.type).subscribe((data: any) => {
      this.typeService.getTypes().subscribe((data: any) =>{
        this.types = data;
      });
    });
    this.editer = false;
    this.type = new Typeconsultation();
  }
}
