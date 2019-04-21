import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {Usuario} from '../usuario';

@Component({
    selector: 'app-usuario-detalle',
    templateUrl: './usuario-detalle.component.html',
    styleUrls: ['./usuario-detalle.component.css'],
})
export class UsuarioDetalleComponent implements OnInit {
    /**
     * Identificador de usuario
     */
    public id = 0;
    /**
     * Entidad de usuario
     */
    public usuario: Usuario;
    /**
     * Flag de lazy load y render lista
     */
    public flagLoad = false;

    /**
     * Constructor del modulo
     * @param activateRoute modulo para acceder a params
     * @param apiService servicio para conexion http
     */
    constructor(private activateRoute: ActivatedRoute,
                private apiService: ApiService) {
        this.id = activateRoute.snapshot.params['id'];
    }

    /**
     * Carga los datos del modulo
     */
    private async loadData() {
         this.apiService.getUsuario(this.id).subscribe(
            (informacion) => {
                this.usuario = informacion;
                this.flagLoad = true;
            });
    }

    ngOnInit() {
        this.loadData();
    }

}
