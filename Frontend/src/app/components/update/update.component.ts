import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/moels/empleado';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../../empleado.service'

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
  
  constructor(private EmpleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.miEmpleado= JSON.parse(sessionStorage.getItem('Empleado_Update'))
  }

  update(){
    this.EmpleadoService.update_employes(this.miEmpleado).subscribe(
      result=>{
        this.updateOK();
      }
    )
  }

  private Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  private updateOK(){
    this.Toast.fire({
      icon: 'success',
      title: 'Actualizado con Exito'
    })
  }
  
}
