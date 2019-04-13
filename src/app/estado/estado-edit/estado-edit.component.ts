import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Estado} from '../estado';
import {EstadoServiceService} from '../estado-service.service';

@Component({
    selector: 'app-estado-edit',
    templateUrl: './estado-edit.component.html',
    styleUrls: ['./estado-edit.component.css'],
})
export class EstadoEditComponent implements OnInit {
    /**
     * Instancia de estado
     */
    estado: Estado;
    /**
     * Identificador de estado
     */
    id: number;

    /**
     * Constructor de componente
     * @param estadoService servicio http
     * @param toastrService notificación UI
     * @param router redirección de componentes
     * @param activateRoute get params URL
     */
    constructor(private estadoService: EstadoServiceService,
                private toastrService: ToastrService,
                private router: Router,
                private activateRoute: ActivatedRoute) {
        this.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.loadData();
    }

    /**
     * Carga de información
     */
    private async loadData() {
        await this.estadoService.getEstados(this.id).subscribe(
            (informacion: any) => {
                console.table('inf', this.id);
                informacion.data.forEach((k) => {
                    if (parseInt(k.id) == this.id) {
                        this.estado = k;

                    }
                });
            });
    }

    /**
     * Actualización de referencia
     */
    actualizar(): void {
        this.estadoService.updateEstado(this.estado);
        this.toastrService.success('Registro', 'Estado Actualizado');
        this.router.navigate(['/admin/usuario/lista']);
    }

}
