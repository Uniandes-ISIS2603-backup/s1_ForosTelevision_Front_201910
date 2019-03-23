import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {Usuario} from '../usuario';

@Component({
    selector: 'app-usuario-detalle',
    templateUrl: './usuario-detalle.component.html',
    styleUrls: ['./usuario-detalle.component.css'],
})
export class UsuarioDetalleComponent implements OnInit {

    public id = 0;
    usuario: Usuario;

    constructor(activateRoute: ActivatedRoute,
                private apiService: ApiService) {
        this.id = activateRoute.snapshot.params['id'];
    }

    private async loadData() {
        this.apiService.getUsuario(this.id).subscribe(
            (informacion) => {
                if (informacion.status === 200) {
                    this.usuario = informacion.data;
                } else {
                    console.error('Error api usuario');
                }
            });
    }

    ngOnInit() {
        this.loadData();
    }

}
