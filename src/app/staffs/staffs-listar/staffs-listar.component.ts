import { Component, OnInit } from '@angular/core';
import {Staff} from '../staff';
import {StaffsService} from '../staffs.service';

@Component({
  selector: 'app-staffs-listar',
  templateUrl: './staffs-listar.component.html',
  styleUrls: ['./staffs-listar.component.css']
})
export class StaffsListarComponent implements OnInit {

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
  constructor(private staffsService: StaffsService) {
  }

  /**
   * Carga la informacion de usuarios asyncronicamente
   */
  private async loadData() {
    await this.staffsService.getStaffs().subscribe((informacion) => {
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
