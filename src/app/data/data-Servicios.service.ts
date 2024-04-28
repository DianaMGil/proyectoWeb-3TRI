import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicios } from '../common/servicios';

@Injectable({
  providedIn: 'root'
})

// ESTA CLASE HACE DE PUENTE PARA ACCEDER A LOS DATOs .JSON
export class DataServiciosService {

  constructor(private http:HttpClient) 
      { 
        
      }

  // función para comunicar con datos .Json >> funcion que se llamará en componenete servicios
  getobtenerServicios():
  
    Observable<Servicios>
    {
      return this.http.get<Servicios>('./assets/data/serviciosGym.json')
    }
  
  
}