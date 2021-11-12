import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { Film } from '../models/film';
import { Reservation } from '../models/reservation';
import { Salle } from '../models/salle';
import { ClientService } from '../shared/client.service';
import { FilmService } from '../shared/film.service';
import { ReservationService } from '../shared/reservation.service';
import { SalleService } from '../shared/salle.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films : Film[] = [];
  salles : Salle[] = [];
  clients : Client[] = [];
  reservations : Reservation[] = [];

  //display form

  displayFilmForm : boolean = false;


  //Send data to other component

  constructor(
    private httpFilm : FilmService,
    private httpSalle : SalleService,
    private httpReservation : ReservationService,
    private httpClient : ClientService,
    public route : Router
  ) { }

  ngOnInit(): void {
    this.getAllFilm();
    this.getAllSalle();
    this.getAllReservation();
    this.getAllClient();
  }

  //Request
  getAllFilm(){
    this.httpFilm.getAll().subscribe(resp => {
      this.films = resp;
      
    });
  }

  getAllSalle(){
    this.httpSalle.getAll().subscribe(resp => {
      this.salles = resp;
      console.log(this.salles);
    });
  }

  getAllReservation(){
    this.httpReservation.getAll().subscribe(resp => {
      this.reservations = resp;
    });
  }

  getAllClient(){
    this.httpClient.getAll().subscribe(resp => {
      this.clients = resp;
    });
  }


  //Delete film
  deleteFilm(film : any){
    console.log(film);
    this.httpFilm.delete(film.id);
    this.films.splice(this.films.indexOf(film), 1)
  }

  //Close
  closeAddFilm(){
    this.displayFilmForm = !this.displayFilmForm;
  }

  //Modals
  displayModalAddFilm(){
    this.displayFilmForm = !this.displayFilmForm;
  }

  //Submit form
  registerUser(nomFilm : string, dateFilm : string, numeroSalle : number){

    let film = {
      id : 0,
      nom : nomFilm,
      date : dateFilm,
      salle : numeroSalle
    }

   this.httpFilm.create(film);
   this.films.push(film)
    
  }
  
  //open page film
  openFilm(film : any){
    this.route.navigate(['film/'+film.id])
  }
}
