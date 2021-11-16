import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from "../services/empleados.service";
import { ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

          buscar:string =""
          activatedRoute: any;

  constructor(public emp:EmpleadosService,public route:ActivatedRoute) {

    this.route.params.subscribe(parametros=>{
      console.log(parametros);
      if( parametros['texto']){
        this.buscar = parametros ['texto'];
        this.buscarEmpleado();


      }
    })

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      console.log(params.texto);
    })
  }

  buscarEmpleado( ){
    if(this.buscar.length==0 ){
    return;
    }
    this.emp.buscarEmpleados(this.buscar)
    // .subscribe();
  }

}
