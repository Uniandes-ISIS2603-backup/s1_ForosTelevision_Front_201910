import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/s1_foros-api/api/canales/';
const canales = 'all';
const canales_single = '';

@Injectable()
export class CanalesService {

  constructor(private http: HttpClient) {
  }

  getCanales(): Observable<any> {
    return this.http.get<any>(API_URL + canales);
  }

  getCanal(id: number): Observable<any> {
    return this.http.get<any>(API_URL + canales_single + `${id}`);
  }

}
