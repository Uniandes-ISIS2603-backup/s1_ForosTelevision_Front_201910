import { Component, OnInit } from '@angular/core';
import {Productora} from '../productora';
import {ProductoraService} from '../productora.service';

@Component({
  selector: 'app-productora-list',
  templateUrl: './productora-list.component.html',
  styleUrls: ['./productora-list.component.css'],
})
export class ProductoraListComponent implements OnInit {

  productoras: Productora;
  /**
   * Flag de lazy load y render lista
   */
  flagLoad = false;

  constructor(private api: ProductoraService) {}

  /**
   * Carga la informacion de usuarios asyncronicamente
   */
  private async loadData() {
    await this.api.getProductoras().subscribe((informacion) => {
      this.productoras = informacion;
      this.flagLoad = false;
    });
  }

  /**
   * Inicializar el componentes
   */
  ngOnInit() {
    this.loadData();
  }

}
