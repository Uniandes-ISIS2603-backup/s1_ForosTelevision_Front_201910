import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Dia} from './dia';

const API_URL = '../../assets/faker/';
const dias = 'dias.json';

@Injectable()
export class DiaService {

    constructor(private http: HttpClient) {
    }

    getDias(): Observable<any> {
        return this.http.get<any>(API_URL + dias);
    }

    registro(dia: Dia): Promise<any> {
        return this.http.post(API_URL, dia).toPromise();
    }

}
