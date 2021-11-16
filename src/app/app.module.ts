import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaginasComponent } from './components/paginas/paginas.component';
import { InicioComponent } from './components/paginas/inicio/inicio.component';
import { EmpleadosComponent } from './components/paginas/empleados/empleados.component';
import { GruposComponent } from './components/paginas/grupos/grupos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import {MatGridListModule} from '@angular/material/grid-list';

import { EmpleadoformComponent } from './components/paginas/empleadoform/empleadoform.component';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [
    AppComponent,
    PaginasComponent,
    InicioComponent,
    EmpleadosComponent,
    GruposComponent,
    NavbarComponent,
    EmpleadoformComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
