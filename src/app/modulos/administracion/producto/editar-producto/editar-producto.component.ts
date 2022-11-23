import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  id: string = '';

  productoForm: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'tipo': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }
  //para los datos para los input
  BuscarProducto() {
    this.servicioProducto.obtenerProductoPorId(this.id).subscribe((datos: ModeloProducto) => {
      this.productoForm.controls["id"].setValue(datos.id);
      this.productoForm.controls["tipo"].setValue(datos.tipo);
      this.productoForm.controls["nombre"].setValue(datos.nombre);
      this.productoForm.controls["descripcion"].setValue(datos.descripcion);
      this.productoForm.controls["precio"].setValue(datos.precio);
    });
  }
  //actualización
  editarProducto() {
    let tipo = this.productoForm.controls["tipo"].value;
    let nombre = this.productoForm.controls["nombre"].value;
    let descripcion = this.productoForm.controls["descripcion"].value;
    let precio = parseInt(this.productoForm.controls["precio"].value);
    let p = new ModeloProducto();
    p.tipo = tipo;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.id = this.id;
    this.servicioProducto.actualizarProducto(p).subscribe((datos: ModeloProducto) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Actualizado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/administracion/listar-producto"])
    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error actualizando producto',
        footer: '<a href="">¿Ingresaste bien todos los campos?</a>'
      })
    })
  }

}
