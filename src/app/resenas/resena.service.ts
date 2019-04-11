import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ICanal} from '../canales/icanal';
0
import {Resena} from './resena';

const API_URL = 'http://localhost:8080/s1_foros-api/api/canales/';
const canales = 'all';
const canales_single = '';

@Injectable({
  providedIn: 'root'
})
export class ResenaService {

  constructor(private http: HttpClient) {
  }

  getResenas(): Observable<any> {
    return this.http.get<any>(API_URL + canales);
  }

  getResena(id: number): Observable<any> {
    return this.http.get<any>(API_URL + canales_single + `${id}`);
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
