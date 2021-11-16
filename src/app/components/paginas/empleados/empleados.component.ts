import { Component, OnInit } from '@angular/core';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: EmpleadoModel[]=[];
  cargar=false;

  constructor(private empladosService:EmpleadosService) { }

  ngOnInit(){
    this.cargar=true

    this.empladosService.getEmpleados()
    .subscribe(resp=>{
    console.log(resp);
    this.empleados=resp;
    this.cargar=false;
    });
}



}
