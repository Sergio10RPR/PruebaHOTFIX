import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/moels/empleado';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  miEmpleado:Empleado = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    edad: 0,
    sueldo: 0,
    direccion: ''
  }
  
  constructor() { }

  ngOnInit(): void {
    this.miEmpleado= JSON.parse(sessionStorage.getItem('Empleado_Update'))
  }

}
