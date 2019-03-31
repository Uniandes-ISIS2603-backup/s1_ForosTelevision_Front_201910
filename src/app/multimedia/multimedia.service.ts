import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {Multimedia} from './multimedia';

const API_URL = 'http://localhost:8080/s1_foros-api/api/multimedia/';
const estados = 'multimedia.json';

@Injectable()
export class MultimediaService {

    constructor(private http: HttpClient, private storage: AngularFireStorage) {

    }

    getMultimedias(idProduccion: number): Observable<any> {
        return this.http.get<any>(API_URL + estados + `?id=${idProduccion}`);
    }

    public tareaCloudStorage(nombreArchivo: string, datos: any) {
        return this.storage.upload(nombreArchivo, datos);
    }

    public referenciaCloudStorage(nombreArchivo: string) {
        return this.storage.ref(nombreArchivo);
    }

    registrar(multimedia: Multimedia): Promise<any> {
        return this.http.post(API_URL, multimedia).toPromise();
    }

}
