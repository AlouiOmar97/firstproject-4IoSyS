import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from '../core/Model/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:3000/residence/"

  getResidence(): Observable<Residence[]>{
    return this.http.get<Residence[]>(this.apiUrl)
  }

  getResidenceById(id: any): Observable<Residence>{
    return this.http.get<Residence>(this.apiUrl+id)
  }

  addResidence(residence: Residence){
    return this.http.post(this.apiUrl, residence)
  }

  updateResidence(id: any, residence: Residence){
    return this.http.put(this.apiUrl + id, residence)
  }

  deleteResidence(id: any){
    return this.http.delete(this.apiUrl+id)
  }

}
