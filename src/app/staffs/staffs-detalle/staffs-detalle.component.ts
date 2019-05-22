import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Staff} from '../staff';
import {Produccion} from '../../producciones/produccion';
import {StaffsService} from '../staffs.service';
import { ProduccionesService } from '../../producciones/producciones.service';

@Component({
  selector: 'app-staffs-detalle',
  templateUrl: './staffs-detalle.component.html',
  styleUrls: ['./staffs-detalle.component.css'],
})
export class StaffsDetalleComponent implements OnInit {

  /**
   * Identificador de usuario
   */
  public id = 0;
  /**
   * Entidad de usuario
   */
  public staff: Staff;

  public peliculas: Produccion[];

  /**
   * Flag de lazy load y render lista
   */
  public flagLoad = false;

  /**
   * Constructor del modulo
   * @param activateRoute modulo para acceder a params
   * @param apiService servicio para conexion http
   */
  constructor(private activateRoute: ActivatedRoute,
              private staffsService: StaffsService,
              private produccionesService: ProduccionesService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  /**
   * Carga los datos del modulo
   */
  private async loadData() {
     this.staffsService.getStaff(this.id).subscribe(
        (informacion) => {
          this.staff = informacion;
          this.flagLoad = true;
        });
    this.staffsService.getProduccionesStaff(this.id).subscribe(
      (informacion) => {
        this.peliculas = informacion;
        this.flagLoad = true;
      });

  }

  ngOnInit() {
    this.loadData();
  }

}
