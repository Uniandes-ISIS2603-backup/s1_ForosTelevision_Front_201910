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
    public usuario: Usuario;
    /**
     * Flag de lazy load y render lista
     */
    public flagLoad = false;

    constructor(activateRoute: ActivatedRoute,
                private apiService: ApiService) {
        this.id = activateRoute.snapshot.params['id'];
    }

    private async loadData() {
        await this.apiService.getUsuario(this.id).subscribe(
            (informacion) => {
                this.usuario = informacion;
                this.flagLoad = true;
            });
    }

    ngOnInit() {
        this.loadData();
    }

}
