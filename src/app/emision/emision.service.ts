/**
* Imports
*/
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Emision} from './emision';
import {environment} from '../../environments/environment';

/**
* Constante que define la URL del programa.
*/
const API_URL = environment.apiURL;

/**
* Constante que define el path del recurso.
*/ 
const emisiones = '/emisiones';


/**
* El proveedor de servicios de las emisiones.
*/
@Injectable()
export class EmisionService {
    
    /**
    * Constructor del servicio
    * @param http HttpClient - encargado de las peticiones.
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Método para obtener la lista de emisiones.
    * @returns La lista de emisiones
    */
    getEmisiones(): Observable<Emision[]> {
        return this.http.get<Emision[]>(API_URL + emisiones);
    }
    
    /**
    * Función para obtener el detalle de una emisión.
    * @returns detalle de una emisión.
    */
    getEmisionDetail(emisionId): Observable<Emision> {
        return this.http.get<Emision>(API_URL + emisiones + '/' + emisionId);
    }
    
    /**
    * Crea una emisión.
    * @param emision - emisión que se añadirá.
    * return emisión añadida
    */
    createEmision(emision): Observable<Emision> {
        return this.http.post<Emision>(API_URL + emisiones, emision);
    }
    
    /**
    * Actualiza una emisión
    * @param emision La nueva información de la emisión.
    * @returns La emisión actualizada
    */
    updateEmision(emision): Observable<Emision> {
        return this.http.put<Emision>(API_URL + emisiones + '/' + emision.id, emision);
    }
    
}
