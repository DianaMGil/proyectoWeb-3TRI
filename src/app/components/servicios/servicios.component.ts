import { Component, OnInit } from '@angular/core';
import { Servicios } from '../../common/servicios';
import { DataServiciosService } from '../../data/data-Servicios.service';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})

//COMUNICAR CON ARCHIVO JSON

//implementar OnInit
export class ServiciosComponent implements OnInit{

  //INISTANCIAS OBJETO PARA USARLO EN LA FUNCION loadServicios
  servicios!: Servicios

//comunicar con data.service
  constructor(private dataService:DataServiciosService){}

  //crear método OnInit para que funcione bien esta interfaz/propiedad
  ngOnInit(): void{
    this.loadServicios(); //llamar funcion 
  }
  
  //MÉTODOS PROPIOS 

  //cargar datos servicios para luego usar el OnInit
  loadServicios()
  {
    //LLAMAR método creado en data.service (getObteneServicios// .subscribe < adquiere los datos
    this.dataService.getobtenerServicios().subscribe(
      {
        next: (data) =>
          {
             console.log(data)
             this.servicios=data //en este objeto se guarda los datos que se obtienen
          },
        
            //si llega un  resultado error >> sale el error que ha sido
        error: err =>
          {
             console.log(err)
          },

             //completado si llega uno u otro se cierra comunicación
        complete :() =>
          {
              console.log('completado')
          }    
      }
    )
  }


  

   
    
  

}
