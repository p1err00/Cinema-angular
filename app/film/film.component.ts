import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../models/client';
import { Film } from '../models/film';
import { ClientService } from '../shared/client.service';
import { FilmService } from '../shared/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  filmId !: number;
  film !: Film;
  

  clients : Client[] = [];

  //Show client reservation
  displayReservation : boolean = false;

  constructor(
    private httpFilm : FilmService,
    private httpClient : ClientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.getFilmById(params['id']);
    });
  }

  //Get value from db
  getFilmById(filmId : number){
    this.httpFilm.getById(filmId).subscribe(resp => {
      this.film = resp;
      console.log(this.film);
      
    });
  }


  reservation(){
    this.httpClient.getAll().subscribe(resp => {
      this.clients = resp;
    });
    this.displayReservation = ! this.displayReservation;
  }

  //add reservation to db
  setReservation(client : any){
    console.log(client.nom);
    
  }
}
