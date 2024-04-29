import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FormularioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
