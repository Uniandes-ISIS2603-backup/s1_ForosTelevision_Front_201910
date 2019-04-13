import { Component, OnInit } from '@angular/core';
import {Multimedia} from '../multimedia';
import {MultimediaService} from '../multimedia.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {

  multimedia: Multimedia[];
  /**
   * Flag de lazy load y render lista
   */
  flagLoad = false;

  constructor(private mulService: MultimediaService,
  ) {
  }

  /**
   * Carga la informacion de usuarios asyncronicamente
   */
  private async loadData() {
    await this.mulService.getMultimedias().subscribe((informacion) => {
      this.multimedia = informacion;
      console.table(this.multimedia);
      this.flagLoad = false;
    });
  }

  ngOnInit() {
    this.loadData();
  }

}
