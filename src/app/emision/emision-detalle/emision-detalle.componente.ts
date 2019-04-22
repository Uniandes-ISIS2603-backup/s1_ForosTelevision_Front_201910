/**
* Imports
*/
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmisionService } from '../emision.service';
import { Emision } from '../emision';

@Component({
    selector: 'emision-detail',
    templateUrl: './emision-detail.component.html',
    styleUrls: ['./emision-detail.component.css']
})
export class EmisionDetalleComponent implements OnInit {

    /**
    * Detalle de la emisión
    */
    @Input() emision: Emision;
    
    /**
    * Constructor 
    */
    constructor(
        private route: ActivatedRoute,
        private emisionService: EmisionService 
    ) { }

    /**
    * El id de la emision que viene en el path
    */
    emision_id: number;
    
    /**
    * Método que mostrará el detalle de la emisión.
    */
    getEmisionDetail(): void {
        this.emisionService.getEmisionDetail(this.emision_id)
            .subscribe(emision => {
                this.emision = emision
            });
    }
   
    /**
    * Método que inicializa el componente.
    */
    ngOnInit() {
        this.emision_id = +this.route.snapshot.paramMap.get('id');
        if (this.emision_id){
        this.emision = new Emision();
        this.getEmisionDetail();
        }
    }
}