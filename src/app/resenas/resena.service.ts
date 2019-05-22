import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Resena} from './resena';

const API_URL = 'http://localhost:8080/s1_foros-api/api/resenas/';
const API_URL_PROD = 'http://localhost:8080/s1_foros-api/api/resenas/';
const resenas = 'all';
const resenas_single = '';

@Injectable({
  providedIn: 'root'
})
export class ResenaService {

  constructor(private http: HttpClient) {
  }

  getResenas(): Observable<any> {
    return this.http.get<any>(API_URL_PROD + resenas_single+ resenas);
  }

  getResena(id: number): Observable<any> {
    return this.http.get<any>(API_URL + resenas_single + `${id}`);
  }

  getResenasProducciones(id: number): Observable<any> {
    return this.http.get<any>(API_URL + resenas_single + `${id}`);
  }



  crearResena(resena: Resena): Promise<any> {
    const cuerpo = {
      nombre: resena.id,
      email: resena.descripcion,
    };
    return this.http.post(API_URL, cuerpo).toPromise();
  }

  eliminarResena(resena: Resena):Observable<any>
  {
    // @ts-ignore
    const cuerpo = {
      id: resena.id,
    };
    return this.http.delete(API_URL+ resena.id);

  }



  actualizarResena(resena: Resena)
  {
    // @ts-ignore
    const cuerpo = {
      id: resena.id,
      descripcion: resena.descripcion,
      idUsuario: resena.idUsuario,
    };
    return this.http.put(API_URL, cuerpo);

  }

}
