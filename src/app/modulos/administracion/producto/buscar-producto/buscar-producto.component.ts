import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {
  listadoRegistros: ModeloProducto[]=[];

  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.ObternerListadoProductos();
  }
  //llamado al metodo
  ObternerListadoProductos(){
    this.productoServicio.obtenerProducto().subscribe((datos: ModeloProducto[])=>{
      this.listadoRegistros = datos;
    })
  }

  eliminarProducto(id: any){
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
        this.productoServicio.eliminarProducto(id).subscribe(data => {
          this.ObternerListadoProductos();
          
        },error => {
          console.log(error);
          
        })
      }
      
    })
    
  }

}
