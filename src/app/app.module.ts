import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './plantilla/navbar/navbar.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ConocenosComponent } from './modulos/conocenos/conocenos.component';
import { AprobacionesComponent } from './modulos/aprobaciones/aprobaciones.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioAdmiComponent } from './plantilla/inicio-admi/inicio-admi.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ConocenosComponent,
    AprobacionesComponent,
    InicioAdmiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
