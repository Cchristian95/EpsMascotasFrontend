import { Component } from '@angular/core';
import { ModeloMascota } from 'src/app/modelos/mascota';
import { MascotaService } from 'src/app/servicios/mascota.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent {

  listadoRegistros: ModeloMascota[]=[];

  constructor(private mascotaServicio: MascotaService) { }

  ngOnInit(): void {
    this.ObternerListadoMascotas();
  }
  //llamado al metodo
  ObternerListadoMascotas(){
    this.mascotaServicio.obtenerMascota().subscribe((datos: ModeloMascota[])=>{
      this.listadoRegistros = datos;
    })
  }

  eliminarMascota(id: any){
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
        this.mascotaServicio.eliminaMascota(id).subscribe(data => {
          this.ObternerListadoMascotas();
          
        },error => {
          console.log(error);
          
        })
      }
      
    })
    
  }

}
