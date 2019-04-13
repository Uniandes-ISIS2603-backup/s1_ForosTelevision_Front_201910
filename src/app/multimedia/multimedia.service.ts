import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {Multimedia} from './multimedia';

const API_URL = 'http://localhost:8080/s1_foros-api/api/multimedia/';
const imagenes = 'cambiar/imagen';
const todas = 'all';

@Injectable()
export class MultimediaService {

    constructor(private http: HttpClient, private storage: AngularFireStorage) {

    }

    /**
     * Retorna lista de recursos multimedia
     */
    getMultimedias(): Observable<any> {
        return this.http.get<any>(API_URL + todas);
    }

    /**
     * Almcena un arhivo en Firebase Storage
     * @param nombreArchivo nombre y extension
     * @param dato de archivo en binario
     */
    public tareaCloudStorage(nombreArchivo: string, datos: any) {
        return this.storage.upload(nombreArchivo, datos);
    }

    /**
     * URL de acceso a partir de nombre archivo
     * @param nombreArchivo nombre y extension
     */
    public referenciaCloudStorage(nombreArchivo: string) {
        return this.storage.ref(nombreArchivo);
    }

    /**
     * Registra una colección de recursos multimedia
     * @param multimedia instancia cargada
     */
    public registrar(multimedia: Multimedia): Promise<any> {
        return this.http.post(API_URL, multimedia).toPromise();
    }

    /**
     * Registra una imagen en un recurso multimedia
     * @param id identificador multimedia
     * @param url de imagen
     */
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
