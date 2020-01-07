import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {AdminhomeComponent} from './adminhome/adminhome.component';
import {ComptesComponent} from './comptes/comptes.component';
import {AuthentifGuard} from './guards/authentif.guard';
import {SecretaireGuard} from './guards/secretaire.guard';
import {SecretairehomeComponent} from './secretairehome/secretairehome.component';
import {PatienthomeComponent} from './patienthome/patienthome.component';
import {PatientGuard} from './guards/patient.guard';
import {Typeconsultation} from './classes/typeconsultation';
import {TypeConsultationComponent} from './type-consultation/type-consultation.component';
import {ConsultationComponent} from './consultation/consultation.component';
import {MedicamentComponent} from './medicament/medicament.component';
import {RendezvousComponent} from './rendezvous/rendezvous.component';
import {MedecinComponent} from './medecin/medecin.component';
import {OrdonnanceComponent} from './ordonnance/ordonnance.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'adminhome',
    component: AdminhomeComponent,
    canActivate: [AuthentifGuard],
  },
  {
    path: 'type',
    component: TypeConsultationComponent,
    canActivate: [AuthentifGuard]
  },
  {
    path: 'consultation',
    component: ConsultationComponent,
    canActivate: [AuthentifGuard]
  },
  {
    path: 'medecin',
    component: MedecinComponent,
    canActivate: [AuthentifGuard]
  },
  {
    path: 'comptes',
    component: ComptesComponent,
    canActivate: [AuthentifGuard]
  },
  {
    path: 'medicament',
    component: MedicamentComponent,
    canActivate: [AuthentifGuard]
  },
  {
    path: 'secretairehome',
    component: SecretairehomeComponent,
    canActivate: [SecretaireGuard]
  },
  {
    path: 'patienthome',
    component: PatienthomeComponent,
    canActivate: [PatientGuard]
  },
  {
    path: 'ordonnance',
    component: OrdonnanceComponent,
    canActivate: [SecretaireGuard]
  },
  {
    path: 'rendezvous',
    component: RendezvousComponent,
    canActivate: [PatientGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
