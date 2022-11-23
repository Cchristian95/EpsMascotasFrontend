import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota';
import { MascotaService } from 'src/app/servicios/mascota.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent {

  id:string = '';

  mascotaForm: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'foto':['', [Validators.required]],
    'estado':['', [Validators.required]],
    'especie':['', [Validators.required]],
    'comentario':['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder, 
    private servicioMascota: MascotaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascota();
  }
  //para los datos para los input
  BuscarMascota() {
    this.servicioMascota.obtenerMascotaPorId(this.id).subscribe((datos: ModeloMascota) => {
      this.mascotaForm.controls["id"].setValue(datos.id);
      this.mascotaForm.controls["nombre"].setValue(datos.nombre);
      this.mascotaForm.controls["foto"].setValue(datos.foto);
      this.mascotaForm.controls["estado"].setValue(datos.estado);
      this.mascotaForm.controls["especie"].setValue(datos.especie);
      this.mascotaForm.controls["comentario"].setValue(datos.comentario);
    });
  }
  //actualización
  editarMascota(){
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
    p.id = this.id;
    this.servicioMascota.actualizarMascota(p).subscribe((datos: ModeloMascota)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Mascota Actualizada con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/administracion/listar-mascota"])
    },(error: any)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error actualizando Mascota',
        footer: '<a href="">¿Ingresaste bien todos los campos?</a>'
      })
    })
  }

}
