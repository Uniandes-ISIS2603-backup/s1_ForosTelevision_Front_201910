import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-usuario-recomendacion',
  templateUrl: './usuario-recomendacion.component.html',
  styleUrls: ['./usuario-recomendacion.component.css'],
})
export class UsuarioRecomendacionComponent implements OnInit {

  userId: string;
  email: string;

  constructor(private apiService: ApiService, private toastrService: ToastrService) {
    this.userId = localStorage.getItem('id_user');
  }

  ngOnInit() {
    this.loadEmail();
  }

  /**
   * Consultar email de usuario
   */
  private loadEmail() {
    this.apiService.getUsuario(parseInt(this.userId)).subscribe((info) => {
      this.email = info.email;
      console.log(this.email);
    });
  }

  sendEmail(){
    this.apiService.enviarRecomendacion(this.email).then( (d) => {
      this.toastrService.success(d.toString(), 'Email');
      console.log('Send m', d);
    });
  }

}
