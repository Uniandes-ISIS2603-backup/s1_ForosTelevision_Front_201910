import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {Multimedia} from './multimedia';

const API_URL = 'http://localhost:8080/s1_foros-api/api/multimedia/';
const estados = 'multimedia.json';
const imagenes = 'cambiar/imagen';
const todas = 'all';

@Injectable()
export class MultimediaService {

    constructor(private http: HttpClient, private storage: AngularFireStorage) {

    }

    getMultimedias(): Observable<any> {
        return this.http.get<any>(API_URL + todas);
    }

    public tareaCloudStorage(nombreArchivo: string, datos: any) {
        return this.storage.upload(nombreArchivo, datos);
    }

    public referenciaCloudStorage(nombreArchivo: string) {
        return this.storage.ref(nombreArchivo);
    }

    public registrar(multimedia: Multimedia): Promise<any> {
        return this.http.post(API_URL, multimedia).toPromise();
    }

    public registrarImagenes(id: number, url: string) {
        console.log('imagen', url);
        this.http.post(API_URL + imagenes, {
            id_multimedia: id,
            imagen: url,
        }).subscribe((estado) => console.log('estado sub', estado));
    }

    public update(imagen: any): Promise<any> {
        return this.http.post(API_URL + imagenes, imagen).toPromise();
    }

}
