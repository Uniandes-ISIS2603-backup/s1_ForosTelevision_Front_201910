import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Resena} from '../resena';
import {ResenaService} from '../resena.service';

@Component({
  selector: 'app-editar-resenas',
  templateUrl: './editar-resenas.component.html',
  styleUrls: ['./editar-resenas.component.css']
})
export class EditarResenasComponent implements OnInit {
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
    await this.resenaService.getResena(this.id).subscribe((informacion) => {
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
   * Enviar solicitud http para actualizar información
   */
  actualizar() {
    console.log('canal', this.resena);
    this.resenaService.actualizarResena(this.resena).subscribe((inf) => {
      console.log('Edit canales', inf);
      this.router.navigate(['/admin/canales/lista']);
    });

  }

}
