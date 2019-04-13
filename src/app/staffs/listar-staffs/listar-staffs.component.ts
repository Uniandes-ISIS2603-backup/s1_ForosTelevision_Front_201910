import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Staff} from '../staff';

@Component({
  selector: 'app-listar-staffs',
  templateUrl: './listar-staffs.component.html',
  styleUrls: ['./listar-staffs.component.css'],
})
export class ListarStaffsComponent implements OnInit {

  /**
   * Entidad de staffs
   */
  staffs: Staff[];
  /**
   * Flag de lazy load y render lista
   */
  flagLoad = false;

  /**
   * Constructor del componente
   * @param apiServive servicio de conexión http
   */
  constructor(private apiServive: ApiService) {
  }

  /**
   * Carga la informacion de usuarios asyncronicamente
   */
  private async loadData() {
    await this.apiServive.getStaffs().subscribe((informacion) => {
      this.staffs = informacion;
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
