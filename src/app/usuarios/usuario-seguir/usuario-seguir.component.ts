import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from '../api.service';
import {Usuario} from '../usuario';

@Component({
  selector: 'app-usuario-seguir',
  templateUrl: './usuario-seguir.component.html',
  styleUrls: ['./usuario-seguir.component.css'],
})
export class UsuarioSeguirComponent implements OnInit {

  /**
   * Entidad de usuario
   */
  usuarios: Usuario[];
  /**
   * Flag de lazy load y render lista
   */
  flagLoad = false;
  idUser: string;

  /**
   * Constructor del componente
   * @param apiServive servicio de conexión http
   */
  constructor(private apiServive: ApiService, private toastrService: ToastrService) {
    this.idUser = localStorage.getItem('id_user');
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

  /**
   * Inicializar el componentes
   */
  ngOnInit() {
    this.loadData();
  }

  seguirUsuario(id: number) {
    this.apiServive.seguirUsuario(this.idUser, id.toString()).then( (data) => {
      console.log('Inf', data);
    });
    this.toastrService.success('Nuevo seguidor', 'Seguir');
  }
}
