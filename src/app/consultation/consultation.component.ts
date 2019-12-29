import { Component, OnInit } from '@angular/core';
import {ConsultationService} from '../services/consultation.service';
import {Consultation} from '../classes/consultation';
import {TypeserviceService} from '../services/typeservice.service';
declare var swal: any;

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  constructor(private consultationService: ConsultationService, private typeConsultationService: TypeserviceService) { }
  cons;
  public types;
  public editer = false;
  public con: Consultation = new Consultation();


  ngOnInit() {
      this.consultationService.getAll().subscribe((data: any) => {
        this.cons = data;
        console.log(this.cons);
      });
      this.typeConsultationService.getTypes().subscribe((data : any[]) => {
        this.types = data;
      });
  }
  ajouterCons(e){
    e.preventDefault();
    console.log(this.con.typeConsultation);
    this.consultationService.save(this.con, this.con.typeConsultation.id).subscribe((data) =>{
      this.cons.push(this.con);
      this.con = new Consultation();
      swal('Consultation ajoutée!', '', 'success');
      this.consultationService.getAll().subscribe((data: any[] ) => {
        this.cons = data;
      });
    });
  }

  delete(id: any){
      this.consultationService.delete(id).subscribe((data: any) =>{
        swal('Consultation Supprimé!', '', 'success');
        this.consultationService.getAll().subscribe((data: any[]) => {
          this.cons = data;
        });
      });
  }

  editConsultation(id){
    console.log(id);
    this.editer = true;
    this.consultationService.getConsultation(id).subscribe((data:any) =>{
      this.con.id = data.body.id;
      this.con.dateC =  data.body.dateC;
      this.con.Diagnostic = data.body.diagnostic;
      this.con.motif = data.body.motif;
      this.con.price = data.body.price;
      this.con.typeConsultation = data.body.typeConsultation;
    });
  }

  validerModification(){
    console.log(this.con);
    this.consultationService.upadte(this.con).subscribe((data)=>{
      this.consultationService.getAll().subscribe((data: any[]) =>{
        this.cons = data;
      });
    });
    this.editer = false;
    this.con = new Consultation();
  }
  inistaliser(){
    this.con.dateC = undefined;
    this.con.typeConsultation = undefined;
    this.con.price = undefined;
    this.con.Diagnostic = undefined;
    this.con.motif = undefined;
  }

}
