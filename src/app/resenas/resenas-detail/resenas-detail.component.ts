import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResenaService} from '../resena.service';
import {Resena} from '../resena';

@Component({
  selector: 'app-resenas-detail',
  templateUrl: './resenas-detail.component.html',
  styleUrls: ['./resenas-detail.component.css']
})
export class ResenasDetailComponent implements OnInit {



  public id = 0;
  public resena: Resena;
  /**
   * Flag de lazy load y render lista
   */
  public flagLoad = false;

  constructor(activateRoute: ActivatedRoute,
              private apiService: ResenaService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  private async loadData() {
    await this.apiService.getResena(this.id).subscribe(
        (informacion) => {
          this.resena = informacion;
          this.flagLoad = true;
        });
  }

  ngOnInit() {
    this.loadData();
  }


}
