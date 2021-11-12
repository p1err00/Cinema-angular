import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { Film } from '../models/film';
import { Reservation } from '../models/reservation';
import { ClientService } from '../shared/client.service';
import { FilmService } from '../shared/film.service';
import { ReservationService } from '../shared/reservation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {

  //Array get from db
  clients: Client[] = [];
  films: Film[] = [];
  reservations: Reservation[] = [];

  registerForm!: FormGroup;

  constructor(
    private httpFilm: FilmService,
    private httpClient: ClientService,
    private httpReservation: ReservationService,
    //private formBuilder: FormBuilder --> Probleme d'import 
  ) { }

  ngOnInit(): void {
    this.getReservations();
    this.getClients();
    this.getFilms();

    // this.registerForm = this.formBuilder.group({
    //   client: ['', Validators.required],
    //   film: ['', Validators.required]
    // });
  }

  getReservations() {
    this.httpReservation.getAll().subscribe(resp => {
      this.reservations = resp;
    });
  }

  getClients() {
    this.httpClient.getAll().subscribe(resp => {
      this.clients = resp;
    });
  }

  getFilms() {
    this.httpFilm.getAll().subscribe(resp => {
      this.films = resp;
    });
  }

  setReservation(){
    let reservation = {
      id : 0,
      id_client: 3,
      nom_client : "Michel",
      nom_film: "Les gendamres de st tropez"
    }

    this.httpReservation.create(reservation);
    // if(this.registerForm.valid){
    //   this.httpReservation.create(this.registerForm);
    // }
  }
}
