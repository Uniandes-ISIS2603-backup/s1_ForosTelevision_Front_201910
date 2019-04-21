/**
* Imports
*/
import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {EmisionService} from '../emision.service';
import {EmisionDetail} from '../emision-detail';

/**
* Componente del módulo.
*/
@Component({
    selector: 'emision-edit';
    templateUrl: './emision-editar.componente.html';
    providers: [];
})

/**
* Clase del módulo
*/
export class EmisionEditComponent implements OnInit, OnChanges{

    /**
    * Constructor del módulo.
    */
    constructor(
        private datePipe: DatePipe,
        private emisionService: EmisionService,
        private toastrService: ToastrService,
    ){}
    
    /**
    * La emisión que será recibida
    */
    @Input() emision: EmisionDetail;
    
    /**
    * Salida que se recibe cuando se actualiza la emisión.
    */
    @Output() update = new EventEmitter();
     
    /**
    * Salida que se recibe cuando el usuario cancela la actualización.
    */ 
    @Output() cancel = new EventEmitter();
    
    /**
    * Método que hace la petición al servicio de actualizar la emisión.
    */
    editEmision(): void{
        let date1 : Date = new Date(this.emision.fechaInicio.day, this.emision.fechaInicio.month - 1, this.emision.fechaInicio.year);
        let date2 : Date = new Date(this.emision.fechaFin.day, this.emision.fechaFin.month - 1, this.emision.fechaFin.year);
        
        this.emision.fechaInicio = this.datePipe.transform(date1, 'dd-MM-yyyy');
        this.emision.fechaFin = this.datePipe.transform(date2, 'dd-MM-yyyy');
        
        this.emisionService.updateEmision(this.emision).subscribe(
            () => {this.toastrService.success("", "");}
        );
        this.update.emit();
    }
    
    /**
    * Método que cancela la operación.
    */
    cancelEdition(): void{
        this.cancel().emit();
    }
    
    ngOnInit(){
        if (this.emision && this.emision.fechaInicio && this.emision.fechaFin) {
            this.emision.fechaInicio = this.emision.fechaInicio.substring(0, 10);
            var date = {
                day: + this.emision.fechaInicio.split('-')[2],
                month: + this.emision.fechaInicio.split('-')[1],
                year: + this.emision.fechaInicio.split('-')[0]
            };
            this.emision.fechaFin = this.emision.fechaFin.substring(0, 10);
            var date2 = {
                day: + this.emision.fechaFin.split('-')[2],
                month: + this.emision.fechaFin.split('-')[1],
                year: + this.emision.fechaFin.split('-')[0]
            };
            this.emision.fechaInicio = date;
            this.emision.fechaFin = date2;
        }
    }
    
    ngOnChanges(){
        this.ngOnInit();
    }
}

