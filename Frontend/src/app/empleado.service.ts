import { Injectable } from '@angular/core';
import { Empleado } from './moels/empleado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  ruta = 'http://34.122.112.23:4200';
  constructor(private http:HttpClient) { }

  create_employes(empleado:Empleado){
    return this.http.post(`${this.ruta}/empleado`, empleado);
  }
}
