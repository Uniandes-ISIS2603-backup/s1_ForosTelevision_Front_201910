import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Produccion} from './produccion';

const API_URL = 'http://localhost:8080/s1_foros-api/api/producciones/';
const producciones = 'all';
const producciones_single = '';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    /**
     * Retorna lista de producciones
     */
    getProducciones(): Observable<any> {
        return this.http.get<any>(API_URL + producciones);
    }

    /**
     * Retorna un producción especifico
     * @param id identificador unico de producción
     */
    getProduccion(id: number): Observable<any> {
        return this.http.get<any>(API_URL + producciones_single + `${id}`);
    }

    /**
     * Registra un nuevo producción
     * @param produccion entidad
     */
    registrarProduccion(produccion: Produccion): Promise<any> {
        const cuerpo = {
            nombre: produccion.nombre,
            descripcion: produccion.descripcion,
            clasificacion: produccion.clasificacion,
            calificacionPromedio: produccion.calificacionPromedio,
        };
        return this.http.post(API_URL, cuerpo).toPromise();
    }

    /**
     * Actualiza la informacion de un producción
     * @param produccion editado
     */
    actualizarProduccion(produccion: Produccion) {
        const cuerpo = {
            id: produccion.id,
            nombre: produccion.nombre,
            descripcion: produccion.descripcion,
            clasificacion: produccion.clasificacion,
            calificacionPromedio: produccion.calificacionPromedio,
        };
        return this.http.put(API_URL, cuerpo);
    }

}
