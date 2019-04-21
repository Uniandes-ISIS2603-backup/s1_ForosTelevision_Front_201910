import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Estado} from '../estado';
import {EstadoServiceService} from '../estado-service.service';

@Component({
    selector: 'app-estado-lista',
    templateUrl: './estado-lista.component.html',
    styleUrls: ['./estado-lista.component.css'],
})
export class EstadoListaComponent implements OnInit {

    estados: Estado[];
    /**
     * Flag de lazy load y render lista
     */
    flagLoad = false;
    /**
     * User id
     */
    public idUser = 0;

    constructor(private estadoService: EstadoServiceService,
                activateRoute: ActivatedRoute,
    ) {
        this.idUser = activateRoute.snapshot.params['id'];
    }

    /**
     * Carga la informacion de usuarios asyncronicamente
     */
    private async loadData() {
         this.estadoService.getEstados(this.idUser).subscribe((informacion) => {
            if (informacion.status === 200) {
                this.estados = informacion.data;
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
