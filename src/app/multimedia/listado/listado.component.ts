import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  /**
   * produccion Id
   */
  public idProduccion = 0;

  constructor(private mulService: MultimediaService,
              activateRoute: ActivatedRoute,
  ) {
    this.idProduccion = activateRoute.snapshot.params['id'];
  }

  /**
   * Carga la informacion de usuarios asyncronicamente
   */
  private async loadData() {
    await this.mulService.getMultimedias(this.idProduccion).subscribe((informacion) => {
      if (informacion.status === 200) {
        this.multimedia = informacion.data;
        this.flagLoad = false;
      } else {
        console.error('HTTP ERROR GET USUARIOS');
      }
    });
  }

  ngOnInit() {
    this.loadData();
  }

}
