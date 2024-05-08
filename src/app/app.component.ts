import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FooterComponent } from './components/footer/footer.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,ServiciosComponent,FooterComponent, InstalacionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Marva Sport Center';
  


}
