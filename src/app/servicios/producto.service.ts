import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProducto } from '../modelos/producto';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:3000';
  token : String='';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }
  //Listar (Lo que se refleja en la tabla)
  obtenerProducto(): Observable<ModeloProducto[]>{
    return this.http.get<ModeloProducto[]>(`${this.url}/producto-servicios`);
  }
  //Editar (Refleja info autocompleta input)
  obtenerProductoPorId(id: string): Observable<ModeloProducto>{
    return this.http.get<ModeloProducto>(`${this.url}/producto-servicios/${id}`);
  }

  crearProducto(producto: ModeloProducto):Observable<ModeloProducto>{
    return this.http.post<ModeloProducto>(`${this.url}/producto-servicios`,producto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  //Modifica
  actualizarProducto(producto: ModeloProducto):Observable<ModeloProducto>{
    return this.http.put<ModeloProducto>(`${this.url}/producto-servicios/${producto.id}`,producto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  eliminarProducto(id: String): Observable<any>{
    return this.http.delete(`${this.url}/producto-servicios/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
}
