import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CanalesService} from '../../canales/canales.service';
import {ICanal} from '../../canales/icanal';

@Component({
  selector: 'app-canal-detail',
  templateUrl: './canal-detail.component.html',
  styleUrls: ['./canal-detail.component.css']
})
export class CanalDetailComponent implements OnInit {


  public id = 0;
  public canal: ICanal;
  /**
   * Flag de lazy load y render lista
   */
  public flagLoad = false;

  constructor(activateRoute: ActivatedRoute,
              private apiService: CanalesService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  private async loadData() {
    await this.apiService.getCanal(this.id).subscribe(
        (informacion) => {
          this.canal = informacion;
          this.flagLoad = true;
        });
  }

  ngOnInit() {
    this.loadData();
  }

}
