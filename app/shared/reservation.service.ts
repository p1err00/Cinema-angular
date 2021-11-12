import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`${environment.apiUrl}/reservations`);
  }

  getById(id : number): Observable<Reservation>{
    return this.http.get<Reservation>(`${environment.apiUrl}/reservations${id}`);
  }

  create(data : any){
    return this.http.post(`${environment.apiUrl}/reservations`, data);
  }

  update(id : number, data : any){
    return this.http.put(`${environment.apiUrl}/reservations/${id}`, data);
  }

  delete(id : number){
    return this.http.delete(`${environment.apiUrl}/reservations/${id}`);
  }
}
