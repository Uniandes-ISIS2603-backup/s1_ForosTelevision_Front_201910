/**  
 * Imports
 */
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {EmisionService} from '../emision.service';
import {Emision} from '../emision';

@Component({
    selector: 'emision-create',
    templateUrl: './emision-crear.component.html',
    providers: [DatePipe]
})
export class EmisionCrearComponent implements OnInit {

    /**
    * Constructor
    */
    constructor(
        private dp: DatePipe,
        private emisionService: EmisionService,
        private tService: ToastrService
    ) {}

    /**
    * La nueva emisión.
    */
    emision: Emision;

    /**
    * El output que indica cuando se cancela la creación.
    */
    @Output() cancel = new EventEmitter();

    /**
    * El output que indica cuando se crea la nueva emisión.
    */
    @Output() create = new EventEmitter();

    /**
    * Función que se encarga de crear una emisión
    */
    createEmision(): Emision {

        let date1 : Date = new Date(this.emision.fechaInicio.day, this.emision.fechaInicio.month - 1, this.emision.fechaInicio.year);
        let date2 : Date = new Date(this.emision.fechaFin.day, this.emision.fechaFin.month - 1, this.emision.fechaFin.year);
        
        this.emision.fechaInicio = this.datePipe.transform(date1, 'dd-MM-yyyy');
        this.emision.fechaFin = this.datePipe.transform(date2, 'dd-MM-yyyy');
        
        console.log(this.emision);
        this.emisionService.createEmision(this.emision)
            .subscribe((emision) => {
                this.emision = emision;
                this.create.emit();
                this.toastrService.success("La emisión fue creada", "Creation");

            });
        return this.emision;
    }

    /**
    * Funcion que emite la cancelación de la creación.
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.emision = new Emision();
    }

}