import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../empleado.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  empleados: any = [];
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.read_employes().subscribe(
      res => {
        this.empleados = res;
      },
      err => console.error(err)
    );
  }

}
