import { Component, OnInit } from '@angular/core';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';
import { Apis } from '../../common/apis';
import { ApiService } from '../../data/api.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {

  personajesRyM!: Apis;
  constructor(private api: ApiService ){}



  ngOnInit(): void {
    this.loadApis();
  }

  loadApis(){
    this.api.getPersonajesRyM().subscribe(
      {
        next: (data) =>{
          console.log(data)
          this.personajesRyM = data
        },
        error: err => {
          console.log(err)
        },
        complete: () =>{
          console.log('completado')
        }
      }
    )
  }











  // HASTA AQUI
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
