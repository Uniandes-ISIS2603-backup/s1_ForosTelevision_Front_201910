import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Resena} from '../resena';
import {ResenaService} from '../resena.service';

@Component({
  selector: 'app-crear-resenas',
  templateUrl: './eliminar-resenas.component.html',
  styleUrls: ['./eliminar-resenas.component.css'],
})
export class EliminarResenasComponent implements OnInit {
  /**
   * Identificador de usuario
   */
  public id = 0;
  /**
   * Entidad de usuario
   */
  public resena: Resena = null;
  /**
   * Flag de lazy load y render lista
   */
  public flagLoad = false;

  /**
   * Constructor del modulo
   * @param activateRoute modulo para acceder a params de url
   * @param router redireccion a otros modulos
   * @param canalService servicio de conexion http
   */
  constructor(activateRoute: ActivatedRoute,
              private router: Router,
              private resenaService: ResenaService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  /**
   * Carga de información en el componente
   */
  private async loadData() {
    this.resenaService.getResena(this.id).subscribe((informacion) => {
      this.resena = informacion;
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
   * Envia la informacion al api
   */
  eliminar() {
    console.log('resena', this.resena);
    this.resenaService.eliminarResena(this.resena).subscribe((inf) => {
      console.log('Eliminar resenas', inf);
      this.router.navigate(['/admin/resenas/delete']);
    });

    /**
     * This function will initialize the component
     */

  }
}

