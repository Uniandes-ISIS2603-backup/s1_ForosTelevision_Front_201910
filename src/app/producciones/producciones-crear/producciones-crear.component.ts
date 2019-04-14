import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ApiService } from '../api.service';
import {Produccion} from '../produccion';


@Component({
  selector: 'app-producciones-crear',
  templateUrl: './producciones-crear.component.html',
  styleUrls: ['./producciones-crear.component.css']
})
export class ProduccionesCrearComponent implements OnInit {

  /**
   * Constructor for the component
   * @param authService Auth service provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
      private apiService: ApiService,
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
   * Envia la informacion al api
   */
  registro(): void {
    console.log('registro', this.produccion);
    this.apiService.registrarProduccion(this.produccion).then(
        () => {
          this.toastrService.success('Registro', 'Registro Realizado');
          this.router.navigate(['/admin/producciones/lista']);
        });
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.produccion = new Produccion();
    this.clasificaciones = ['ADULTOS', 'ADOLESCENTES', 'FAMILIAR', 'INFANTIL'];
  }


}
