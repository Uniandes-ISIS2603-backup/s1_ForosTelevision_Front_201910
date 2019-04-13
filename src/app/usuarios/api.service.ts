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

    /**
     * Retorna lista de usuarios
     */
    getUsuarios(): Observable<any> {
        return this.http.get<any>(API_URL + usuarios);
    }

    /**
     * Retorna un usuario especifico
     * @param id identificador unico de usuario
     */
    getUsuario(id: number): Observable<any> {
        return this.http.get<any>(API_URL + usuarios_single + `${id}`);
    }

    /**
     * Registra un nuevo usuario
     * @param usuario entidad
     */
    registrarUsuario(usuario: Usuario): Promise<any> {
        const cuerpo = {
            nombre: usuario.nombre,
            email: usuario.email,
            privilegio: usuario.privilegio,
            clave: usuario.password,
        };
        return this.http.post(API_URL, cuerpo).toPromise();
    }

    /**
     * Actualiza la informacion de un usuario
     * @param usuario editado
     */
    actualizarUsuario(usuario: Usuario) {
        const cuerpo = {
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email,
            privilegio: usuario.privilegio,
            clave: usuario.password,
        };
        return this.http.put(API_URL, cuerpo);
    }

}
