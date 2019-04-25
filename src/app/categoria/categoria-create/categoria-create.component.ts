import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Categoria} from '../categoria';
import {CategoriaService} from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {
  /**
   * Constructor for the component
   * @param authService Auth service provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
      private apiService: CategoriaService,
      private toastrService: ToastrService,
      private router: Router,
  ) {
  }

  /**
   * Entidad que representa una categoria
   */
  categoria: Categoria;

  /**
   * Envia la informacion al api
   */
  registro(): void {
    console.log('registro', this.categoria);
    this.apiService.registrarCategoria(this.categoria).then(
        () => {
          this.toastrService.success('Registro', 'Registro Realizado');
          this.router.navigate(['/admin/categoria/lista']);
        });
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.categoria = new Categoria();
  }

}
