import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuarioForm: FormGroup = this.fb.group({
    'cedula':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'apellido':['', [Validators.required]],
    'telefono':['', [Validators.required]],
    'correo':['', [Validators.required]],
    'rol':['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder, 
    private servicioUsuario: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarUsuario(){
    let cedula = this.usuarioForm.controls["cedula"].value;
    let nombre = this.usuarioForm.controls["nombre"].value;
    let apellido = this.usuarioForm.controls["apellido"].value;
    let telefono = this.usuarioForm.controls["telefono"].value;
    let correo = this.usuarioForm.controls["correo"].value;
    let rol = this.usuarioForm.controls["rol"].value;
    let p = new ModeloUsuario();
    p.cedula = cedula;
    p.nombre = nombre;
    p.apellido = apellido;
    p.telefono = telefono;
    p.correo = correo;
    p.rol = rol;
    this.servicioUsuario.crearUsuario(p).subscribe((datos: ModeloUsuario)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario Creado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/administracion/listar-usuario"])
    },(error: any)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error creando usuario',
        footer: '<a href="">¿Ingresaste bien todos los campos?</a>'
      })
    })
  }

}
