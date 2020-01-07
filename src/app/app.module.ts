import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ComptesComponent } from './comptes/comptes.component';
import {HttpClientModule} from '@angular/common/http';
import { SecretairehomeComponent } from './secretairehome/secretairehome.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { Sidebar3Component } from './sidebar3/sidebar3.component';
import { TypeConsultationComponent } from './type-consultation/type-consultation.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { MedecinComponent } from './medecin/medecin.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import { OrdonnanceComponent } from './ordonnance/ordonnance.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    AdminhomeComponent,
    SidebarComponent,
    FooterComponent,
    ComptesComponent,
    SecretairehomeComponent,
    Sidebar2Component,
    PatienthomeComponent,
    Sidebar3Component,
    MedicamentComponent,
    RendezvousComponent,
    Sidebar3Component,
    TypeConsultationComponent,
    ConsultationComponent,
    MedecinComponent,
    OrdonnanceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SchedulerModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {
}
