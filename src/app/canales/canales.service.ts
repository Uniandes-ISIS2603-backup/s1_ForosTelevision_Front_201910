import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

const API_URL = '../../assets/faker/';
const canales = 'canales.json';
const usuarios_single = 'usuario-single.json';

@Injectable()
export class CanalesService {

  constructor(private http: HttpClient) {
  }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(API_URL + usuarios);
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get<any>(API_URL + usuarios_single + `?id=${id}`);
  }

}
