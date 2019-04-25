import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Categoria} from './categoria';

const API_URL = 'http://localhost:8080/s1_foros-api/api/categorias/';
const single = '';

@Injectable()
export class CategoriaService {

  constructor(private http: HttpClient) {
  }

  /**
   * Retorna lista de productoras
   */
  getCategorias(): Observable<any> {
    return this.http.get<any>(API_URL);
  }

  /**
   * Retorna un usuario especifico
   * @param id identificador unico de categoria
   */
  getCategoria(id: number): Observable<any> {
    return this.http.get<any>(API_URL + single + `${id}`);
  }

  /**
   * Registra un nueva cateogoria
   * @param categoria entidad
   */
  registrarCategoria(categoria: Categoria): Promise<any> {
    return this.http.post(API_URL, categoria).toPromise();
  }

  /**
   * Actualiza la informacion de una categoria
   * @param categoria editado
   */
  actualizarCategoria(categoria: Categoria) {
    return this.http.put(API_URL + categoria.id, categoria);
  }
}
