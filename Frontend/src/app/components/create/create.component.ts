import { Component, OnInit } from '@angular/core';
import { Empleado } from  './../../moels/empleado';
import { EmpleadoService } from './../../empleado.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  miEmpleado:Empleado = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    edad: 0,
    sueldo: 0,
    direccion: ''
  }

  constructor(private app:EmpleadoService, private router: Router) { }

  ngOnInit(): void {

  }

  btnCrear(){
    console.log(this.miEmpleado)
    this.app.create_employes(this.miEmpleado).subscribe(
      (res:any) => {
        window.alert("se ha registrado con exito");
        this.router.navigate([ '/crud']);
      },
      err =>{
        window.alert(err);
      }
    );
  }

}
