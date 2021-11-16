import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpleadoModel } from '../models/empleado.model';
import { map,delay} from 'rxjs/operators';//El operador map sirve para transformar

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private url=  'https://consumir-api-dd051-default-rtdb.firebaseio.com';
  params: any;
  baseUrl: any;

  constructor(private http: HttpClient) { }

//  get params(){{
//       api_key: ''

//  }}



  crearEmpleado(empleado: EmpleadoModel){
    //Recibe vario argumentos
    return this.http.post(`${this.url}/empleados.json`,empleado)
    .pipe(
      map((resp:any)=>{
      empleado.id =resp.name;

      //regresa toda la instancia pero ahora con su id
      return empleado;
      })
      );

  }
  actualizarEmpleado(empleado:EmpleadoModel){
    //Para romper la relacion
  const empleadoTemp ={

  ...empleado //El operador spret se va a encargar
  };


  delete empleadoTemp.id;
  //el punto json es propio de firebase
  return this.http.put(`${this.url}/empleados/${empleado.id}.json`,empleadoTemp);

  }

  getEmpleado(id:string){

    return this.http.get(`${this.url}/empleados/${id}.json`);
  }

  getEmpleados(){
    return this.http.get(`${this.url}/empleados.json`)
  .pipe(
   //map(this.crearArreglo)
    //o se puede realizar de esta forma
    map(resp => this.crearArreglo(resp)),
    delay(0)
  );

  }

  crearArreglo(empleadosObj: object){

    const empleados: EmpleadoModel[] = [];

    // console.log(empleadosObj);

    if (empleadosObj === null){return []; }

    Object.keys(empleadosObj).forEach(key => {

const empleado: EmpleadoModel = empleadosObj [key];

empleado.id = key;

empleados.push(empleado);

    });


    return empleados;

  }

  buscarEmpleados(texto: string){

     const params = {...this.params, page:'1' }

     this.http.get(`${ this.baseUrl}/search/empleado`,{
      params


      })


  }


}
