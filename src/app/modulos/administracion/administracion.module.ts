import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';


@NgModule({
  declarations: [
    EliminarUsuarioComponent,
    EditarUsuarioComponent,
    BuscarUsuarioComponent,
    CrearUsuarioComponent,
    CrearPlanComponent,
    BuscarPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent,
    CrearProductoComponent,
    BuscarProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    BuscarMascotaComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
