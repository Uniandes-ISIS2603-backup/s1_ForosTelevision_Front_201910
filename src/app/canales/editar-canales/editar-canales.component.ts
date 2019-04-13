import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICanal} from '../../canales/icanal';
import {CanalesService} from '../canales.service';

@Component({
  selector: 'app-editar-canales',
  templateUrl: './editar-canales.component.html',
  styleUrls: ['./editar-canales.component.css'],
})
export class EditarCanalesComponent implements OnInit {

  /**
   * Identificador de usuario
   */
  public id = 0;
  /**
   * Entidad de usuario
   */
  public canal: ICanal = null;
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
              private canalService: CanalesService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  /**
   * Carga de información en el componente
   */
  private async loadData() {
    await this.canalService.getCanal(this.id).subscribe((informacion) => {
      this.canal = informacion;
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
    this.canalService.actualizarCanal(this.canal).subscribe((inf) => {
      console.log('Edit canales', inf);
      this.router.navigate(['/admin/canales/lista']);
    });

  }

}
