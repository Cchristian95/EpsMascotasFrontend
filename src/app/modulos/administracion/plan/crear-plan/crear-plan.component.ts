import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan';
import { PlanService } from 'src/app/servicios/plan.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {

  planForm: FormGroup = this.fb.group({
    'nombre':['', [Validators.required]],
    'descripcion':['', [Validators.required]],
    'precio':['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder, 
    private servicioPlan: PlanService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarPlan(){
    let nombre = this.planForm.controls["nombre"].value;
    let descripcion = this.planForm.controls["descripcion"].value;
    let precio = parseInt(this.planForm.controls["precio"].value);
    let p = new ModeloPlan();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    this.servicioPlan.crearPlan(p).subscribe((datos: ModeloPlan)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Plan Creado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/administracion/listar-plan"])
    },(error: any)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error creando plan',
        footer: '<a href="">¿Ingresaste bien todos los campos?</a>'
      })
    })
  }

}
