import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Multimedia} from '../../multimedia/multimedia';
import {MultimediaService} from '../../multimedia/multimedia.service';
import {Productora} from '../../productoras/productora';
import {ProductorasService} from '../../productoras/productoras.service';
import {Produccion} from '../produccion';
import {ProduccionesService} from '../producciones.service';

@Component({
  selector: 'app-producciones-crear',
  templateUrl: './producciones-crear.component.html',
  styleUrls: ['./producciones-crear.component.css'],
})
export class ProduccionesCrearComponent implements OnInit {

  /**
   * Constructor for the component
   * @param authService Auth service provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
      private produccionesService: ProduccionesService,
      private productorasService: ProductorasService,
      private multimediaService: MultimediaService,
      private toastrService: ToastrService,
      private router: Router,
  ) {
  }

  /**
   * Entidad que representa un usuario
   */
  produccion: Produccion;

  /**
   * Arrelgo de roles de usuario
   */
  clasificaciones: string[];

  /**
   * Flag de lazy load y render lista
   */
  flagLoad = false;

  /**
   * Multimedias existentes.
   */
  multimedias: Multimedia[];

  /**
   * Productoras existentes.
   */
  productoras: Productora[];

  /**
   * Envia la informacion al api
   */
  registro(): void {
    console.log('registro', this.produccion);
    this.produccionesService.registrarProduccion(this.produccion).then(
        () => {
          this.toastrService.success('Registro', 'Registro Realizado');
          this.router.navigate(['/admin/producciones/lista']);
        });
  }

  /**
   * Carga la informacion de usuarios asyncronicamente
   */
  private async loadData() {
    await this.multimediaService.getMultimedias().subscribe((informacion) => {
      this.multimedias = informacion;
      this.flagLoad = false;
    });
    await this.productorasService.getProductoras().subscribe((informacion) => {
      this.productoras = informacion;
      this.flagLoad = false;
    });
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.produccion = new Produccion();
    this.clasificaciones = ['ADULTOS', 'ADOLESCENTES', 'FAMILIAR', 'INFANTIL'];
    this.loadData();
  }

}
