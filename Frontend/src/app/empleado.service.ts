import { Injectable } from '@angular/core';
import { Empleado } from './moels/empleado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  ruta = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  /**READ EMPLEADOS */
  read_employes(){
    return this.http.get(`${this.ruta}/practica1/empleados`);
  }

  create_employes(empleado:Empleado){
    return this.http.post(`${this.ruta}/practica1/empleados`, empleado);
  }

  update_employes(empleado:Empleado){
    return this.http.put(`${this.ruta}/practica1/empleados/${empleado.id}`, empleado);
  }

  delete_employes(id:any){
    return this.http.delete(`${this.ruta}/practica1/empleados/${id}`);
  }
}
