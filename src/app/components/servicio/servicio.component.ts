import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Servicios } from '../../common/servicios';
import { DataServiciosService } from '../../data/data-Servicios.service';
import e from 'express';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent implements OnInit {
  serviciosGYM!: Servicios;
  constructor (private dataServicios: DataServiciosService){}

  ngOnInit(): void {
    this.loadServicios();
  }
  loadServicios(){
    this.dataServicios.getobtenerServicios().subscribe(
      {
        next: (data) =>{
          this.serviciosGYM = data
        },
        error: err =>{
          console.log(err)
        },
        complete: () =>{
          console.log('completado')
        }
      }
    )
  }
}
