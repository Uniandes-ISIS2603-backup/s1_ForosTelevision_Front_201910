import { Component, OnInit } from '@angular/core';
import {Resena} from '../resena';
import {ResenaService} from '../resena.service';

@Component({
  selector: 'app-listar-resenas',
  templateUrl: './listar-resenas.component.html',
  styleUrls: ['./listar-resenas.component.css']
})
export class ListarResenasComponent implements OnInit {

  resenas: Resena[];
  /**
   * Flag de lazy load y render lista
   */
  flagLoad = false;

  constructor(private resenaService: ResenaService) {
  }

  /**
   * Carga la informacion de usuarios asyncronicamente
   */
  private async loadData() {
      this.resenaService.getResenas().subscribe((informacion) => {
      this.resenas = informacion;
      this.flagLoad = false;
    });
  }

  ngOnInit() {
    this.loadData();
  }

}
