import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Productora} from './productora';

const API_URL = 'http://localhost:8080/s1_foros-api/api/productoras/';
const single = '';

@Injectable()
export class ProductoraService {

  constructor(private http: HttpClient) {
  }

  /**
   * Retorna lista de productoras
   */
  getProductoras(): Observable<any> {
    return this.http.get<any>(API_URL);
  }

  /**
   * Retorna un usuario especifico
   * @param id identificador unico de categoria
   */
  getProductora(id: number): Observable<any> {
    return this.http.get<any>(API_URL + single + `${id}`);
  }

  /**
   * Registra un nueva categoria
   * @param productora entidad
   */
  registrarProductora(productora: Productora): Promise<any> {
    const cuerpo = {
      id: productora.id,
      nombre: productora.nombre,
    };
    return this.http.post(API_URL, cuerpo).toPromise();
  }

  /**
   * Actualiza la informacion de una categoria
   * @param productora editado
   */
  actualizarProductora(productora: Productora) {
    const cuerpo = {
      id: productora.id,
      nombre: productora.nombre,
    };
    return this.http.put(API_URL + productora.id, cuerpo);
  }
}
