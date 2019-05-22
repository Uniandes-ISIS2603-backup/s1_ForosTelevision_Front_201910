import { Component, OnInit } from '@angular/core';
import {ICanal} from '../icanal';
import {CanalesService} from '../canales.service';

@Component({
  selector: 'app-listar-canales',
  templateUrl: './listar-canales-usuario.component.html',
  styleUrls: ['./listar-canales-usuario.component.css']
})
export class ListarCanalesUsuarioComponent implements OnInit {

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
    this.canalService.getCanales().subscribe((informacion) => {
      this.canales = informacion;
      this.flagLoad = false;
    });
  }

  ngOnInit() {
    this.loadData();
  }
}
