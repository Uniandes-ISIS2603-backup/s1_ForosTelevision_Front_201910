import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Produccion} from '../produccion';
import {Staff} from '../../staffs/staff';
import {ProduccionesService} from '../producciones.service';
import {MultimediaService} from '../../multimedia/multimedia.service';
import { Multimedia } from '../../multimedia/multimedia';

@Component({
  selector: 'app-producciones-detalle',
  templateUrl: './producciones-detalle.component.html',
  styleUrls: ['./producciones-detalle.component.css'],
})
export class ProduccionesDetalleComponent implements OnInit {

  /**
   * Identificador de usuario
   */
   id = 0;

  /**
   * Entidad de usuario
   */
   produccion: Produccion;
  
  /**
   * Staff de la producción
   */
  staff: Staff[];

   /**
    * Entidad de la multimedia de la producción
    */
   multimedia: Multimedia;

   multimedia: Multimedia;

  /**
   * Flag de lazy load y render lista
   */
   flagLoad = false;

  /**
   * Constructor del modulo
   * @param activateRoute modulo para acceder a params
   * @param apiService servicio para conexion http
   */
  constructor(private activateRoute: ActivatedRoute,
              private produccionesService: ProduccionesService,
              private multimediaService: MultimediaService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  /**
   * Carga los datos del modulo
   */
  private async loadData() {
       this.produccionesService.getProduccion(this.id).subscribe(
        (informacion) => {
          this.produccion = informacion;
          this.flagLoad = true;
        });

      this.produccionesService.getStaffsProduccion(this.id).subscribe(
        (informacion) => {
          this.staff = informacion;
          this.flagLoad = true;
        });

      this.multimediaService.getMultimedia(this.id).subscribe(
        (informacion) => {
          this.multimedia = informacion;
          this.flagLoad = true;
        });
  }

  ngOnInit() {
    this.loadData();
  }

}
