import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMascota } from '../modelos/mascota';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  url = 'http://localhost:3000';
  token : String='';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }
  //Listar (Lo que se refleja en la tabla)
  obtenerMascota(): Observable<ModeloMascota[]>{
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas`);
  }
  //Editar (Refleja info autocompleta input)
  obtenerMascotaPorId(id: string): Observable<ModeloMascota>{
    return this.http.get<ModeloMascota>(`${this.url}/mascotas/${id}`);
  }

  crearMascota(mascota: ModeloMascota):Observable<ModeloMascota>{
    return this.http.post<ModeloMascota>(`${this.url}/mascotas`,mascota,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  //Modifica
  actualizarMascota(mascota: ModeloMascota):Observable<ModeloMascota>{
    return this.http.put<ModeloMascota>(`${this.url}/mascotas/${mascota.id}`,mascota,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  eliminaMascota(id: String): Observable<any>{
    return this.http.delete(`${this.url}/mascotas/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
}
