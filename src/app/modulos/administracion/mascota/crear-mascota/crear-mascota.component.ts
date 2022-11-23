import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota';
import { MascotaService } from 'src/app/servicios/mascota.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent {

  mascotaForm: FormGroup = this.fb.group({
    'nombre':['', [Validators.required]],
    'foto':['', [Validators.required]],
    'estado':['', [Validators.required]],
    'especie':['', [Validators.required]],
    'comentario':['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder, 
    private servicioMascota: MascotaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarMascota(){
    let nombre = this.mascotaForm.controls["nombre"].value;
    let foto = this.mascotaForm.controls["foto"].value;
    let estado = this.mascotaForm.controls["estado"].value;
    let especie = this.mascotaForm.controls["especie"].value;
    let comentario = this.mascotaForm.controls["comentario"].value;
    let p = new ModeloMascota();
    p.nombre = nombre;
    p.foto = foto;
    p.estado = estado;
    p.especie = especie;
    p.comentario = comentario;
    this.servicioMascota.crearMascota(p).subscribe((datos: ModeloMascota)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Mascota Creada con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/administracion/listar-mascota"])
    },(error: any)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error creando Mascota',
        footer: '<a href="">¿Ingresaste bien todos los campos?</a>'
      })
    })
  }

}
