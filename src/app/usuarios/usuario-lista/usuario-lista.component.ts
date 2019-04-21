import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Usuario} from '../usuario';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
    styleUrls: ['./usuario-lista.component.css'],
})
export class UsuarioListaComponent implements OnInit {

    /**
     * Entidad de usuario
     */
    usuarios: Usuario[];
    /**
     * Flag de lazy load y render lista
     */
    flagLoad = false;

    /**
     * Constructor del componente
     * @param apiServive servicio de conexión http
     */
    constructor(private apiServive: ApiService) {
    }

    /**
     * Carga la informacion de usuarios asyncronicamente
     */
    private async loadData() {
         this.apiServive.getUsuarios().subscribe((informacion) => {
            this.usuarios = informacion;
            this.flagLoad = false;
        });
    }

    /**
     * Inicializar el componentes
     */
    ngOnInit() {
        this.loadData();
    }
}
