import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  id:string = '';

  usuarioForm: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
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
    private router: Router,
    //invoca al id
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }
  //para los datos de los input
  //autocompleta los campos en la vista IU
  BuscarUsuario(){
    this.servicioUsuario.obtenerUsuarioPorId(this.id).subscribe((datos: ModeloUsuario)=>{
      this.usuarioForm.controls["id"].setValue(datos.id);
      this.usuarioForm.controls["cedula"].setValue(datos.cedula);
      this.usuarioForm.controls["nombre"].setValue(datos.nombre);
      this.usuarioForm.controls["apellido"].setValue(datos.apellido);
      this.usuarioForm.controls["telefono"].setValue(datos.telefono);
      this.usuarioForm.controls["correo"].setValue(datos.correo);
      this.usuarioForm.controls["rol"].setValue(datos.rol);
    });
  }
  //actualización
  editarUsuario(){
    let cedula = this.usuarioForm.controls["cedula"].value;
    let nombre = this.usuarioForm.controls["nombre"].value;
    let apellido = this.usuarioForm.controls["apellido"].value;
    let telefono = this.usuarioForm.controls["telefono"].value;
    let correo = this.usuarioForm.controls["correo"].value;
    let rol = this.usuarioForm.controls["rol"].value;
    let p = new ModeloUsuario();
    console.log(p);
    
    p.cedula = cedula;
    p.nombre = nombre;
    p.apellido = apellido;
    p.telefono = telefono;
    p.correo = correo;
    p.rol = rol;
    p.id = this.id;
    this.servicioUsuario.actualizarUsuario(p).subscribe((datos: ModeloUsuario)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario Actualizado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/administracion/listar-usuario"])
    },(error: any)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error actualizando usuario',
        footer: '<a href="">¿Ingresaste bien todos los campos?</a>'
      })
    })
  }

}
