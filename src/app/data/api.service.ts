import { Injectable } from '@angular/core';
import { Apis } from '../common/apis';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  private urlAPI = 'https://rickandmortyapi.com/api/character/';
  
  getPersonajesRyM(): Observable<Apis>{
    return this.http.get<Apis>(this.urlAPI)
  }


  // public getPersonajeONE(id: number): Observable<PersonajeONE> {
  //   return this.http.get<PersonajeONE>(this.urlAPI + id);
  // }

  //  public getPage(page:string): Observable<Rickymorty>{
  //   return this.http.get<Rickymorty>(page)
  //  }
}
