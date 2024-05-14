import { Component } from '@angular/core';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
