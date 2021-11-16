import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from "@angular/router";
import { BuscarComponent } from './buscar/buscar.component';
import { EmpleadoformComponent } from './components/paginas/empleadoform/empleadoform.component';
import { EmpleadosComponent } from './components/paginas/empleados/empleados.component';
import { GruposComponent } from './components/paginas/grupos/grupos.component';
import { InicioComponent } from './components/paginas/inicio/inicio.component';


//Realiza la  importacion para utilizar fuera
const APP_ROUTES: Routes = [
  {path: 'inicio', component:  InicioComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'empleadoform/:id', component: EmpleadoformComponent},

  {path: 'buscar', component: BuscarComponent},
  {path: 'buscar/:texto', component: BuscarComponent},
  {path: 'empleados/:id/:paginas', component: EmpleadosComponent},

  {path: 'grupos', component: GruposComponent },
  {path: '**', pathMatch: 'full', redirectTo:'inicio'}


];
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
