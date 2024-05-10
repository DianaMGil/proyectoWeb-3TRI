import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../data/data.service';
import { Servicio, Serviciosinter } from '../../common/serviciosinter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './servicio.component.html',
})
export class ServicioComponent implements OnInit {
  serviciosGYM!: Serviciosinter;
  constructor (private dataService:DataService){}

  ngOnInit(): void {
    this.loadServicios();
  }
  loadServicios(){
    this.dataService.getServicios().subscribe(
      {
        next: (data: any) =>{
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
