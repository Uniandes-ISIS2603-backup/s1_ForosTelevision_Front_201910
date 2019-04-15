import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Productora} from './productora';

const API_URL = 'http://localhost:8080/s1_foros-api/api/productoras/';
const productoras_single = '';

@Injectable()
export class ProductorasService {

    constructor(private http: HttpClient) {
    }

    /**
     * Retorna lista de productora
     */
    getProductoras(): Observable<any> {
        return this.http.get<any>(API_URL + productoras_single);
    }

}
