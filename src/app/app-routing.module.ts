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
import {MedicamentComponent} from './medicament/medicament.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'adminhome',
    component: AdminhomeComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
