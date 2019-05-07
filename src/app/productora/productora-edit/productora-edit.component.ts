import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Productora} from '../productora';
import {ProductoraService} from '../productora.service';

@Component({
  selector: 'app-productora-edit',
  templateUrl: './productora-edit.component.html',
  styleUrls: ['./productora-edit.component.css'],
})
export class ProductoraEditComponent implements OnInit {
  /**
   * Identificador de usuario
   */
  public id = 0;
  /**
   * Entidad de usuario
   */
  public productora: Productora = null;
  /**
   * Flag de lazy load y render lista
   */
  public flagLoad = false;

  /**
   * Constructor del modulo
   * @param activateRoute modulo para acceder a params de url
   * @param router redireccion a otros modulos
   * @param apiService servicio de conexion http
   */
  constructor(activateRoute: ActivatedRoute,
              private router: Router,
              private apiService: ProductoraService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  /**
   * Carga de información en el componente
   */
  private async loadData() {
    await this.apiService.getProductora(this.id).subscribe((informacion) => {
      this.productora = informacion;
      this.flagLoad = true;
    });
  }

  /**
   * Metodo de carga de componente
   */
  ngOnInit() {
    this.loadData();
  }

  /**
   * Enviar solicitud http para actualizar información
   */
  actualizar() {
    this.apiService.actualizarProductora(this.productora).subscribe((inf) => {
      console.log('Edit user ', inf);
      this.router.navigate(['/admin/productora/lista']);
    });

  }

}
