import { Component, OnInit } from '@angular/core';
import {Categoria} from '../categoria';
import {CategoriaService} from '../categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css'],
})
export class CategoriaListComponent implements OnInit {

  categorias: Categoria;
  /**
   * Flag de lazy load y render lista
   */
  flagLoad = false;

  constructor(private apiService: CategoriaService) {}

  /**
   * Carga la informacion de usuarios asyncronicamente
   */
  private async loadData() {
    await this.apiService.getCategorias().subscribe((informacion) => {
      this.categorias = informacion;
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
