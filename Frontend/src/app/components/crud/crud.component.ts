import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../empleado.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  empleados: any = [
    {id:0,
      nombre: "string",
      apellido: "string",
      correo: "string",
      telefono: "string",
      edad: 0,
      sueldo:0,
      direccion:"string"}
  ];
  constructor(private empleadoService: EmpleadoService,private route:Router) { }

  ngOnInit(): void {
    this.empleadoService.read_employes().subscribe(
      res => {
        this.empleados = res;
      },
      err => console.error(err)
    );
  }

  public Update(empleado:any){
    sessionStorage.setItem("Empleado_Update",JSON.stringify(empleado))
    this.route.navigate(['crud','update']);
    console.log(empleado)
  }

}
