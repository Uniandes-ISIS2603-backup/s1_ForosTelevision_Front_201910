import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Estado} from './estado';

const API_URL = '../../assets/faker/';
const estados = 'estados.json';

@Injectable()
export class EstadoServiceService {

    constructor(private http: HttpClient) {

    }

    getEstados(idUser: number): Observable<any> {
        return this.http.get<any>(API_URL + estados + `?id=${idUser}`);
    }

    getEstado(id: number): Observable<any> {
        return this.http.get<any>(API_URL + estados);
    }

    updateEstado(estado: Estado) {

    }
}
