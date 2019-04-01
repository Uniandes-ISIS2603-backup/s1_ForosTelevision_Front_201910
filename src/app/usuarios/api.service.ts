import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Usuario} from './usuario';

const API_URL = 'http://localhost:8080/s1_foros-api/api/usuarios/';
const usuarios = 'all';
const usuarios_single = '';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    getUsuarios(): Observable<any> {
        return this.http.get<any>(API_URL + usuarios);
    }

    getUsuario(id: number): Observable<any> {
        return this.http.get<any>(API_URL + usuarios_single + `${id}`);
    }

    registrarUsuario(usuario: Usuario): Promise<any> {
        const cuerpo = {
            nombre: usuario.nombre,
            email: usuario.email,
            privilegio: usuario.privilegio,
            clave: usuario.password,
        };
        return this.http.post(API_URL, cuerpo).toPromise();
    }

}
