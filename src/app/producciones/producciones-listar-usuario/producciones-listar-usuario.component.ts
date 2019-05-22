import { Component, OnInit } from '@angular/core';
import {Resena} from '../../resenas/resena';
import {ResenaService} from '../../resenas/resena.service';
import {Produccion} from '../produccion';
import {ProduccionesService} from '../producciones.service';
import {ListarResenasComponent} from '../../resenas/listar-resenas/listar-resenas.component';

@Component({
  selector: 'app-producciones-listar-usuario',
  templateUrl: './producciones-listar-usuario.component.html',
  styleUrls: ['./producciones-listar-usuario.component.css']
})
export class ProduccionesListarUsuarioComponent implements OnInit {

  /**
   * Entidad de producción
   */
  producciones: Produccion[];

  resenas: Resena[];

  /**
   * Flag de lazy load y render lista
   */
  flagLoad = false;

  /**
   * Constructor del componente
   * @param apiServive servicio de conexión http
   */
  constructor(private produccionesService: ProduccionesService,  private resenasService: ResenaService) {
  }




  /**
   * Carga la informacion de usuarios asyncronicamente
   */
  private async loadData() {
    this.produccionesService.getProducciones().subscribe((informacion) => {
      this.producciones = informacion;
      this.resenasService.getResenas().subscribe((resenas) => {
        this.resenas = resenas;
        this.flagLoad = false;

      });
    })}


    /**
     * Inicializar el componentes
     */
    ngOnInit() {
      this.loadData();
    }


}
