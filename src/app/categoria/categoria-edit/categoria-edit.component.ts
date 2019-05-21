import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Categoria} from '../categoria';
import {CategoriaService} from '../categoria.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css'],
})
export class CategoriaEditComponent implements OnInit {

  /**
   * Identificador de usuario
   */
  public id = 0;
  /**
   * Entidad de usuario
   */
  public categoria: Categoria = null;
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
              private apiService: CategoriaService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  /**
   * Carga de información en el componente
   */
  private async loadData() {
    await this.apiService.getCategoria(this.id).subscribe((informacion) => {
      this.categoria = informacion;
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
    this.apiService.actualizarCategoria(this.categoria).subscribe((inf) => {
      console.log('Edit user ', inf);
      this.router.navigate(['/admin/categoria/lista']);
    });
  }
}
