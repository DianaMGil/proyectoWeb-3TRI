import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicioComponent } from './components/servicio/servicio.component'; 
import { FormularioComponent } from './components/formulario/formulario.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ApiComponent } from './components/api/api.component';

export const routes: Routes = [

    {path:'home', title:'Inicio', component:HomeComponent},
    {path:'servicios', title:'Servicios', component:ServiciosComponent},
    {path:'instalaciones', title:'Instalaciones', component:InstalacionesComponent},

    {path:'formulario', title:'Formulario', component:FormularioComponent},
    {path:'servicio', title:'Servicio', component:ServicioComponent},
    {path:'api', title:'API', component:ApiComponent},

    {path:'', redirectTo:'/home', pathMatch:'full'},

    {path:'**', title:'PAGE NOT FOUND', component:PageNotFoundComponent}





];
