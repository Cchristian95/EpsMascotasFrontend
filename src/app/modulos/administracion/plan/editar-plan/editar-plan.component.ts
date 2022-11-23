import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan';
import { PlanService } from 'src/app/servicios/plan.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.css']
})
export class EditarPlanComponent implements OnInit {

  id:string = '';

  planForm: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'descripcion':['', [Validators.required]],
    'precio':['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder, 
    private servicioPlan: PlanService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarPlan();
  }
  //para los datos para los input
  BuscarPlan(){
    this.servicioPlan.obtenerPlanPorId(this.id).subscribe((datos: ModeloPlan)=>{
      this.planForm.controls["id"].setValue(datos.id);
      this.planForm.controls["nombre"].setValue(datos.nombre);
      this.planForm.controls["descripcion"].setValue(datos.descripcion);
      this.planForm.controls["precio"].setValue(datos.precio);
    });
  }
  //actualización
  editarPlan(){
    let nombre = this.planForm.controls["nombre"].value;
    let descripcion = this.planForm.controls["descripcion"].value;
    let precio = parseInt(this.planForm.controls["precio"].value);
    let p = new ModeloPlan();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.id = this.id;
    this.servicioPlan.actualizarPlan(p).subscribe((datos: ModeloPlan)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Plan Actualizado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/administracion/listar-plan"])
    },(error: any)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error actualizando plan',
        footer: '<a href="">¿Ingresaste bien todos los campos?</a>'
      })
    })
  }

}
