import { Component, OnInit } from '@angular/core';
import { ModeloPlan } from 'src/app/modelos/plan';
import { PlanService } from 'src/app/servicios/plan.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-buscar-plan',
  templateUrl: './buscar-plan.component.html',
  styleUrls: ['./buscar-plan.component.css']
})
export class BuscarPlanComponent implements OnInit {

  listadoRegistros: ModeloPlan[]=[];

  constructor(private planServicio: PlanService) { }

  ngOnInit(): void {
    this.ObternerListadoPlanes();
  }
  //llamado al metodo
  ObternerListadoPlanes(){
    this.planServicio.obtenerPlan().subscribe((datos: ModeloPlan[])=>{
      this.listadoRegistros = datos;
    })
  }

  eliminarPlan(id: any){
    Swal.fire({
      title: '¿Seguro quiere eliminar este campo?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Eliminado!',
          'Su archivo ha sido eliminado.',
          'success'
        )
        this.planServicio.eliminarPlan(id).subscribe(data => {
          this.ObternerListadoPlanes();
          
        },error => {
          console.log(error);
          
        })
      }
      
    })
    
  }

}
