import { AfterViewInit, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import bootstrap from '../../../main.server';
// import 'https://fonts.googleapis.com/css?family=Montserrat:400,700';
// import 'https://fonts.googleapis.com/css?family=Lato:300,400,700');
// import "//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FormularioComponent,FooterComponent,RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {


constructor() { }

  // ngAfterViewInit(): void {
  //   const myCarouselElement = document.querySelector('#myCarousel');

  //   // const carousel = new bootstrap.Carousel(myCarouselElement, { interval: 2000, touch: false });
  // }


  
  
  
  
 
  

}
