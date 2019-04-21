import {Component, OnInit} from '@angular/core';
import {Dia} from '../dia';
import {DiaService} from '../dia.service';

@Component({
    selector: 'app-dia-create',
    templateUrl: './dia-create.component.html',
    styleUrls: ['./dia-create.component.css'],
})
export class DiaCreateComponent implements OnInit {

    /**
     * Instancia de lista
     */
    dia: Dia;

    constructor(private servicio: DiaService) {
    }

    /**
     * Inicilizar componente
     */
    ngOnInit() {
        this.dia = new Dia();
    }

    /**
     * Registro de nuevo días
     */
    registro(): void {
        this.servicio.registro(this.dia).then((resultado) => {
            console.log('registro dia', resultado);
        });
    }
}
