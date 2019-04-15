import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Usuario} from '../../usuarios/usuario';
import {Resena} from '../resena';
import {ResenaService} from '../resena.service';

@Component({
  selector: 'app-crear-resenas',
  templateUrl: './crear-resenas.component.html',
  styleUrls: ['./crear-resenas.component.css'],
})
export class CrearResenasComponent implements OnInit {

  constructor(
      private resenaService: ResenaService,
      private toastrService: ToastrService,
      private router: Router,
  ) {
  }

  /**
   * Entidad que representa una resena
   */
  resena: Resena;

  /**
   * Envia la informacion al api
   */
  creacion(): void {

    console.log('registro', this.resena);

    this.resenaService.crearResena(this.resena).then(
        () => {
          this.toastrService.success('Creacion', 'Creacion Realizado');
          this.router.navigate(['/admin/resenas/lista']);
        });
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.resena = new Resena();
  }

}
