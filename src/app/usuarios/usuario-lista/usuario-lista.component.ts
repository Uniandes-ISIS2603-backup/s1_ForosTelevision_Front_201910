import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Usuario} from '../usuario';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
    styleUrls: ['./usuario-lista.component.css'],
})
export class UsuarioListaComponent implements OnInit {

    usuarios: Usuario[];
    /**
     * Flag de lazy load y render lista
     */
    flagLoad = false;

    constructor(private apiServive: ApiService) {
    }

    /**
     * Carga la informacion de usuarios asyncronicamente
     */
    private async loadData() {
        await this.apiServive.getUsuarios().subscribe((informacion) => {
            if (informacion.status === 200) {
                this.usuarios = informacion.data;
                this.flagLoad = false;
            } else {
                console.error('HTTP ERROR GET USUARIOS');
            }
        });
    }

  ngOnInit() {
      this.loadData();
  }
}
