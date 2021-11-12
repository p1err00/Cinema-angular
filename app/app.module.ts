import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';
import { SalleComponent } from './salle/salle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmModalComponent } from './modals/film-modal/film-modal.component';
import { SalleModalComponent } from './modals/salle-modal/salle-modal.component';
import { ClientModalComponent } from './modals/client-modal/client-modal.component';
import { ReservationModalComponent } from './modals/reservation-modal/reservation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmComponent,
    SalleComponent,
    NavbarComponent,
    FilmModalComponent,
    SalleModalComponent,
    ClientModalComponent,
    ReservationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
