import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Staff} from './staff';

const API_URL = 'http://localhost:8080/s1_foros-api/api/staff/';
const staffs_single = '';

@Injectable()
export class StaffsService {

    constructor(private http: HttpClient) {
    }

    /**
     * Retorna lista de staffs
     */
    getStaffs(): Observable<any> {
        return this.http.get<any>(API_URL + staffs_single);
    }

    /**
     * Retorna un staff especifico
     * @param id identificador unico de staff
     */
    getStaff(id: number): Observable<any> {
        return this.http.get<any>(API_URL + staffs_single + `${id}`);
    }

    /**
     * Retorna todos los staff de una producción
     * @param id identificador único de producción
     */
    getProduccionesStaff(id : number): Observable<any> {
        return this.http.get<any>(API_URL + staffs_single + `${id}/producciones`);
    }

    /**
     * Registra un nuevo producción
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
        return this.http.put(API_URL + staffs_single + `${staff.id}`, cuerpo);
    }

}
