import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../usuarios/api.service';
import {Usuario} from '../../usuarios/usuario';
import {ICanal} from '../icanal';
import {CanalesService} from '../canales.service';

@Component({
  selector: 'app-listar-canales',
  templateUrl: './listar-canales.component.html',
  styleUrls: ['./listar-canales.component.css']
})
export class ListarCanalesComponent implements OnInit {

  canales: ICanal[];
  /**
   * Flag de lazy load y render lista
   */
  flagLoad = false;

  constructor(private canalService: CanalesService) {
  }

  /**
   * Carga la informacion de usuarios asyncronicamente
   */
  private async loadData() {
    await this.canalService.getCanales().subscribe((informacion) => {
      this.canales = informacion;
      this.flagLoad = false;
    });
  }

  ngOnInit() {
    this.loadData();
  }
}