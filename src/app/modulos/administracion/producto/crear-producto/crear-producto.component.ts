import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup = this.fb.group({
    'tipo':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'descripcion':['', [Validators.required]],
    'precio':['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder, 
    private servicioProducto: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarProducto(){
    let tipo = this.productoForm.controls["tipo"].value;
    let nombre = this.productoForm.controls["nombre"].value;
    let descripcion = this.productoForm.controls["descripcion"].value;
    let precio = parseInt(this.productoForm.controls["precio"].value);
    let p = new ModeloProducto();
    p.tipo = tipo;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    this.servicioProducto.crearProducto(p).subscribe((datos: ModeloProducto)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Creado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/administracion/listar-producto"])
    },(error: any)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error creando producto',
        footer: '<a href="">¿Ingresaste bien todos los campos?</a>'
      })
    })
  }

}
