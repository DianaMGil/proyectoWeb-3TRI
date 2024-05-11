import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent, InstalacionesComponent, ServicioComponent, ServiciosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Marva Sport Center';
  


}
