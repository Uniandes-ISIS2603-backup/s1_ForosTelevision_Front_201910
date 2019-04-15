import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Produccion} from '../produccion';
import {ProduccionesService} from '../producciones.service';

@Component({
  selector: 'app-producciones-detalle',
  templateUrl: './producciones-detalle.component.html',
  styleUrls: ['./producciones-detalle.component.css']
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
   * Flag de lazy load y render lista
   */
   flagLoad = false;

  /**
   * Constructor del modulo
   * @param activateRoute modulo para acceder a params
   * @param apiService servicio para conexion http
   */
  constructor(private activateRoute: ActivatedRoute,
              private produccionesService: ProduccionesService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  /**
   * Carga los datos del modulo
   */
  private async loadData() {
      await this.produccionesService.getProduccion(this.id).subscribe(
        (informacion) => {
          this.produccion = informacion;
          this.flagLoad = true;
        }); 
  }

  ngOnInit() {
    this.loadData();  
 
  }

}
