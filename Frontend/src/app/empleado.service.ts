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
    return this.http.get(`${this.ruta}/crud`);
  }

  create_employes(empleado:Empleado){
    return this.http.post(`${this.ruta}/empleado`, empleado);
  }
}
