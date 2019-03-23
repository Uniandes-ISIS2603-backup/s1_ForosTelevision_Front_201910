import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const API_URL = '../../assets/faker/';
const estados = 'multimedia.json';

@Injectable()
export class MultimediaService {

    constructor(private http: HttpClient) {

    }

    getMultimedias(idProduccion: number): Observable<any> {
        return this.http.get<any>(API_URL + estados + `?id=${idProduccion}`);
    }

}
