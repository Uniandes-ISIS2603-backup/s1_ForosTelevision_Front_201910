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
            this.usuarios = informacion;
            this.flagLoad = false;
        });
    }

  ngOnInit() {
      this.loadData();
  }
}
