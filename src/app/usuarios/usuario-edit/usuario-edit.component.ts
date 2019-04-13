import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {Usuario} from '../usuario';

@Component({
    selector: 'app-usuario-edit',
    templateUrl: './usuario-edit.component.html',
    styleUrls: ['./usuario-edit.component.css'],
})
export class UsuarioEditComponent implements OnInit {
    /**
     * Identificador de usuario
     */
    public id = 0;
    /**
     * Roles de usuario
     */
    public roles: string[];
    /**
     * Entidad de usuario
     */
    public usuario: Usuario = null;
    /**
     * Flag de lazy load y render lista
     */
    public flagLoad = false;

    /**
     * Constructor del modulo
     * @param activateRoute modulo para acceder a params de url
     * @param router redireccion a otros modulos
     * @param apiService servicio de conexion http
     */
    constructor(activateRoute: ActivatedRoute,
                private router: Router,
                private apiService: ApiService) {
        this.id = activateRoute.snapshot.params['id'];
    }

    /**
     * Carga de información en el componente
     */
    private async loadData() {
        await this.apiService.getUsuario(this.id).subscribe((informacion) => {
            this.usuario = informacion;
            this.flagLoad = true;
        });
    }

    /**
     * Metodo de carga de componente
     */
    ngOnInit() {
        this.loadData();
        this.roles = ['ADMINISTRADOR', 'USUARIO'];
    }

    /**
     * Enviar solicitud http para actualizar información
     */
    actualizar() {
        this.apiService.actualizarUsuario(this.usuario).subscribe((inf) => {
            console.log('Edit user ', inf);
            this.router.navigate(['/admin/usuario/lista']);
        });

    }

}
