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

    /**
     * Solicita los estados de un usuario
     * @param idUser identificador de usuario
     */
    getEstados(idUser: number): Observable<any> {
        return this.http.get<any>(API_URL + estados + `?id=${idUser}`);
    }

    /**
     * Get estado detalle
     * @param id identificador detalle
     */
    getEstado(id: number): Observable<any> {
        return this.http.get<any>(API_URL + estados);
    }

    /**
     * Actualización de estado
     * @param estado
     */
    updateEstado(estado: Estado) {

    }
}
