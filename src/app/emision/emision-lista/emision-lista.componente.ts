/** 
 * Imports
 */
 import {Component, OnInit} from '@angular/core';
 
import {EmisionService} from '../emision.service';
import {Emision} from '../emision';
import {EmisionDetail} from '../emision-detail';

/**
* Componente del módulo
*/
@Component({
    selector: 'emision-list';
    templateUrl: './emision-lista.componente.html';
})

/**
* Módulo
*/
export class EmisionListComponent implements OnInit{

    /**
    * Constructor del módulo.
    */
    constructor(
        private emisionService: EmisionService
    ){}
    
    /**
    * Lista de emisiones en la aplicación.
    */
    emisiones: Emision[];
    
    /**
    * Método que pide el servicio de mostrar las emisiones.
    */
    getEmisiones(){
        this.emisionService.getEmisiones().subscribe(emisiones => {this.emisiones = emisiones;});
    }
    
    /**
    * Método en arranque de la aplicación.
    */
    ngOnInit(){
        
    }
}
 

