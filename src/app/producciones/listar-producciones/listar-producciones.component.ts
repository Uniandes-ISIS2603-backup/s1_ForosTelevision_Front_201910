import { Component, OnInit } from '@angular/core';
import {Produccion} from "../produccion";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-listar-producciones',
  templateUrl: './listar-producciones.component.html',
  styleUrls: ['./listar-producciones.component.css']
})
export class ListarProduccionesComponent implements OnInit {

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
