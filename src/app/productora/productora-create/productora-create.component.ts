import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Productora} from '../productora';
import {ProductoraService} from '../productora.service';

@Component({
  selector: 'app-productora-create',
  templateUrl: './productora-create.component.html',
  styleUrls: ['./productora-create.component.css'],
})
export class ProductoraCreateComponent implements OnInit {

  /**
   * Constructor for the component
   * @param authService Auth service provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
      private apiService: ProductoraService,
      private toastrService: ToastrService,
      private router: Router,
  ) {
  }

  /**
   * Entidad que representa un usuario
   */
  productora: Productora;

  /**
   * Envia la informacion al api
   */
  registro(): void {
    console.log('registro', this.productora);
    this.apiService.registrarProductora(this.productora).then(
        () => {
          this.toastrService.success('Registro', 'Registro Realizado');
          this.router.navigate(['/admin/productora/lista']);
        });
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.productora = new Productora();
  }

}
