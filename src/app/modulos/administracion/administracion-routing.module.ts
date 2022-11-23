import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { ConocenosComponent } from '../conocenos/conocenos.component';

const routes: Routes = [
  {
    path: "crear-usuario",
    component: CrearUsuarioComponent
  },
  {
    path: "editar-usuario/:id",
    component: EditarUsuarioComponent
  },
  {
    path: "eliminar-usuario",
    component: EliminarUsuarioComponent
  },
  {
    path: "listar-usuario",
    component: BuscarUsuarioComponent
  },
  {
    path: "crear-plan",
    component: CrearPlanComponent
  },
  {
    path: "editar-plan/:id",
    component: EditarPlanComponent
  },
  {
    path: "listar-plan",
    component: BuscarPlanComponent
  },
  {
    path: "eliminar-plan",
    component: EliminarPlanComponent
  },
  {
    path: "crear-producto",
    component: CrearProductoComponent
  },
  {
    path: "editar-producto/:id",
    component: EditarProductoComponent
  },
  {
    path: "listar-producto",
    component: BuscarProductoComponent
  },
  {
    path: "eliminar-producto",
    component: EliminarProductoComponent
  },
  {
    path: "crear-mascota",
    component: CrearMascotaComponent
  },
  {
    path: "editar-mascota/:id",
    component: EditarMascotaComponent
  },
  {
    path: "listar-mascota",
    component: BuscarMascotaComponent
  },
  {
    path: "eliminar-mascota",
    component: EditarMascotaComponent
  },
  {
    path: "conocenos",
    component: ConocenosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
