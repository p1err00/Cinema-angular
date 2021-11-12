import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {


  constructor(
    private http : HttpClient
  ) { }

  getAll(): Observable<Film[]>{
    return this.http.get<Film[]>(`${environment.apiUrl}/films`);
  }

  getById(id : number): Observable<Film>{
    return this.http.get<Film>(`${environment.apiUrl}/films/${id}`);
  }

  create(data : any){
    return this.http.post<Film>(`${environment.apiUrl}/films`, data).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }

  update(id : number, data : any){
    return this.http.put(`${environment.apiUrl}/films/${id}`, data);
  }

  delete(id : number){
    return this.http.delete(`${environment.apiUrl}/films/${id}`).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }
}
