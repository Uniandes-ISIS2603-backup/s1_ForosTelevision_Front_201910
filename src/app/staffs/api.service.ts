import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Staff} from './staff';

const API_URL = 'http://localhost:8080/s1_foros-api/api/staff/';
const staff_single = '';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    /**
     * Retorna lista de staff
     */
    getStaffs(): Observable<any> {
        return this.http.get<any>(API_URL);
    }

    /**
     * Retorna un usuario especifico
     * @param id identificador unico de usuario
     */
    getStaff(id: number): Observable<any> {
        return this.http.get<any>(API_URL + staff_single + `${id}`);
    }

    /**
     * Registra un nuevo staff
     * @param staff entidad
     */
    registrarStaff(staff: Staff): Promise<any> {
        const cuerpo = {
            nombre: staff.nombre,
            descripcion: staff.descripcion,
            foto: staff.foto,
            rol: staff.rol,
        };
        return this.http.post(API_URL, cuerpo).toPromise();
    }

    /**
     * Actualiza la informacion de un staff
     * @param staff editado
     */
    actualizarStaff(staff: Staff) {
        const cuerpo = {
            id: staff.id,
            nombre: staff.nombre,
            descripcion: staff.descripcion,
            foto: staff.foto,
            rol: staff.rol,
        };
        return this.http.put(API_URL, cuerpo);
    }

}
