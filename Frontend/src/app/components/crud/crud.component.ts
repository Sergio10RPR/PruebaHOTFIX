import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../empleado.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  empleados: any = [];
  constructor(private empleadoService: EmpleadoService,private route:Router) { }

  ngOnInit(): void {
    this.empleadoService.read_employes().subscribe(
      res => {
        this.empleados = res;
      },
      err => console.error(err)
    );
  }

  private DeleteOk(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.delete_employes(id).subscribe(
          result=>{
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        )
     
      }
    })
  }

 
  public Update(empleado:any){
    sessionStorage.setItem("Empleado_Update",JSON.stringify(empleado))
    this.route.navigate(['crud','update']);
    console.log(empleado)
  }

  public Delete(id:any){
    this.DeleteOk(id);  
  }

}
