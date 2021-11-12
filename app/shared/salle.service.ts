import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Salle } from '../models/salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(
    private http : HttpClient
  ) { }

  getAll(): Observable<Salle[]>{
    return this.http.get<Salle[]>(`${environment.apiUrl}/salles`);
  }

  getById(id : number): Observable<Salle>{
    return this.http.get<Salle>(`${environment.apiUrl}/salles${id}`);
  }

  create(data : any){
    return this.http.post(`${environment.apiUrl}/salles`, data).subscribe(
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
    return this.http.put(`${environment.apiUrl}/salles/${id}`, data);
  }

  delete(id : number){
    return this.http.delete(`${environment.apiUrl}/salles/${id}`);
  }
}
