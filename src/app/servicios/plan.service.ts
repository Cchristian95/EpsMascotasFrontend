import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPlan } from '../modelos/plan';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  url = 'http://localhost:3000';
  token : String='';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }
  //Listar (Lo que se refleja en la tabla)
  obtenerPlan(): Observable<ModeloPlan[]>{
    return this.http.get<ModeloPlan[]>(`${this.url}/plans`);
  }
  //Editar (Refleja info autocompleta input)
  obtenerPlanPorId(id: string): Observable<ModeloPlan>{
    return this.http.get<ModeloPlan>(`${this.url}/plans/${id}`);
  }

  crearPlan(plan: ModeloPlan):Observable<ModeloPlan>{
    return this.http.post<ModeloPlan>(`${this.url}/plans`,plan,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  //Modifica
  actualizarPlan(plan: ModeloPlan):Observable<ModeloPlan>{
    return this.http.put<ModeloPlan>(`${this.url}/plans/${plan.id}`,plan,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  eliminarPlan(id: String): Observable<any>{
    return this.http.delete(`${this.url}/plans/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
}
