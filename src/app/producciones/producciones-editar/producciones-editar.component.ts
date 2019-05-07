import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Produccion} from '../produccion';
import {ProduccionesService} from '../producciones.service';
import {Multimedia} from '../../multimedia/multimedia';
import {MultimediaService} from '../../multimedia/multimedia.service';
import {Productora} from '../../productoras/productora';
import {ProductorasService} from '../../productoras/productoras.service';

@Component({
  selector: 'app-producciones-editar',
  templateUrl: './producciones-editar.component.html',
  styleUrls: ['./producciones-editar.component.css']
})
export class ProduccionesEditarComponent implements OnInit {

  /**
   * Constructor for the component
   * @param staffsService
   * @param activateRoute
   * @param router
   * @param toastrService
   */
  constructor(
      private produccionesService: ProduccionesService,
      private activateRoute: ActivatedRoute,
      private router: Router,
      private toastrService: ToastrService,
      private productorasService: ProductorasService,
      private multimediaService: MultimediaService,
      ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  /**
   * Identificador de staff
   */
  id = 0;

  /**
   * Entidad de usuario
   */
  produccion: Produccion = null;

  multimedias: Multimedia[];

  productoras: Productora[];

  /**
   * Arrelgo de roles de usuario
   */
  clasificaciones: string[];

  /**
   * Flag de lazy load y render lista
   */
  public flagLoad = false;

  /**
   * Carga de información en el componente
   */
  private async loadData() {
     this.multimediaService.getMultimedias().subscribe((informacion) => {
      this.multimedias = informacion;
      this.flagLoad = false;
    });
     this.productorasService.getProductoras().subscribe((informacion) => {
      this.productoras = informacion;
      this.flagLoad = false;
    });
     this.produccionesService.getProduccion(this.id).subscribe((informacion) => {
      this.produccion = informacion;
      this.flagLoad = true;
    });
  }

  /**
   * Envia la informacion al api
   */
  actualizar() {
    console.log('Actualizar', this.produccion);
    this.produccionesService.actualizarProduccion(this.produccion).subscribe( (inf) => {
      console.log('Editar producción ', inf);
      this.router.navigate(['/admin/producciones/lista']);
    });
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.clasificaciones = ['ADULTOS', 'ADOLESCENTES', 'FAMILIAR', 'INFANTIL'];
    this.loadData();
  }

}
