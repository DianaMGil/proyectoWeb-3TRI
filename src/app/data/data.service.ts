import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../common/serviciosinter';
import { ServiciosMAS } from '../common/servicios-mas';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getServicios(): Observable<Servicio>{
    return this.http.get<Servicio>('./assets/data/serviciosGym.json')
  }

  getServicios2(): Observable<ServiciosMAS>{
    return this.http.get<ServiciosMAS>('./assets/data/oferta.json')
  }
  



  
}
