import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';


import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empleadoform',
  templateUrl: './empleadoform.component.html',
  styleUrls: ['./empleadoform.component.css']
})
export class EmpleadoformComponent implements OnInit {

  empleado: EmpleadoModel =new EmpleadoModel();


  constructor(private empleadosService : EmpleadosService,
              private route:ActivatedRoute ) { }

  ngOnInit() {
    //recibe los datos del empleado y podemos llamar al servicio
    const id =this.route.snapshot.paramMap.get('id');
    console.log(id);

  if(id!== 'nuevo'){
    this.empleadosService.getEmpleado(id)
      .subscribe(resp=>{
        console.log(resp);
        this.empleado.id =id;
      })
  }

  }

  guardar(form: NgForm){

    if(form.invalid){
    console.log('Formulario no válido');
       return;
   }

    Swal.fire({

        title: 'Espere',
        text: 'Guardando información',
        allowOutsideClick: false
    });
    Swal.showLoading();

    let  peticion: Observable<any>;

   if( this.empleado.id){

   peticion = this.empleadosService.actualizarEmpleado(this.empleado);

   }else{

    peticion= this.empleadosService.crearEmpleado(this.empleado);

        }
        peticion.subscribe(resp =>{

          Swal.fire({
              title: this.empleado.name,
              text:'Se actualizo correctamente',

          });
        });



}




}
