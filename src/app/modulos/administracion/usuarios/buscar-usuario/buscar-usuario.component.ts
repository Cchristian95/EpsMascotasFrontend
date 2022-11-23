import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

  listadoRegistros: ModeloUsuario[]=[];

  constructor(private usuarioServicio: UsuariosService) { }

  ngOnInit(): void {
    this.ObtenerListadoUsuarios();
  }
  //Llamamos al metodo
  ObtenerListadoUsuarios(){
    this.usuarioServicio.obtenerUsuario().subscribe((datos: ModeloUsuario[])=>{
      this.listadoRegistros = datos;
    })
  }

  eliminarUsuario(id: any){
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
        this.usuarioServicio.eliminarUsuario(id).subscribe(data => {
          this.ObtenerListadoUsuarios();
          
        },error => {
          console.log(error);
          
        })
      }
      
    })
  }

}
