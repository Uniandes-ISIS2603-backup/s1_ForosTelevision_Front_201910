import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ICanal} from '../icanal';
import {CanalesService} from '../canales.service';

@Component({
  selector: 'app-crear-canales',
  templateUrl: './crear-canales.component.html',
  styleUrls: ['./crear-canales.component.css']
})
export class CrearCanalesComponent implements OnInit {

  constructor(
      private canalService: CanalesService,
      private toastrService: ToastrService,
      private router: Router,
  ) {
  }

  /**
   * Entidad que representa un usuario
   */
  canal: ICanal;
  /**
   * Arrelgo de roles de usuario
   */
  roles: string[];

  /**
   * Envia la informacion al api
   */
  creacion(): void {
    console.log('registro', this.canal);
    this.canalService.crearCanal(this.canal).then(
        () => {
          this.toastrService.success('Crear un Canal', 'Creacion Realizado');
          this.router.navigate(['/admin/canales/lista']);
        });
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
  }

}
