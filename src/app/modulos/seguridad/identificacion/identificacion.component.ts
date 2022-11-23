import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'contrasena': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
  }

  identificarUsuario() {
    let usuario = this.fgValidador.controls["usuario"].value;
    let contrasena = this.fgValidador.controls["contrasena"].value;
    let contrasenaCifrada = cryptoJS.MD5(contrasena).toString()
    this.servicioSeguridad.Identificar(usuario, contrasenaCifrada).subscribe((datos: any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ingreso exitoso',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/inicioAdmi"]);
    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al iniciar sesión',
        footer: '<a href="">¿Ingresaste bien todos los campos?</a>'
      })
    })
  }

}
