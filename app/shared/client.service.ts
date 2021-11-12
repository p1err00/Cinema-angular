import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http : HttpClient
  ) { }

  getAll(): Observable<Client[]>{
    return this.http.get<Client[]>(`${environment.apiUrl}/clients`);
  }

  getById(id : number): Observable<Client>{
    return this.http.get<Client>(`${environment.apiUrl}/clients${id}`);
  }

  create(data : any){
    return this.http.post(`${environment.apiUrl}/clients`, data);
  }

  update(id : number, data : any){
    return this.http.put(`${environment.apiUrl}/clients/${id}`, data);
  }

  delete(id : number){
    return this.http.delete(`${environment.apiUrl}/clients/${id}`);
  }
}
