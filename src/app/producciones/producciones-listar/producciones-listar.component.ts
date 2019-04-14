import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Produccion} from '../produccion';

@Component({
  selector: 'app-producciones-listar',
  templateUrl: './producciones-listar.component.html',
  styleUrls: ['./producciones-listar.component.css']
})
export class ProduccionesListarComponent implements OnInit {

  /**
   * Entidad de producción
   */
  producciones: Produccion[];

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
    await this.apiServive.getProducciones().subscribe((informacion) => {
      this.producciones = informacion;
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

