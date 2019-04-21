/**
* Imports
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EmisionListaComponente } from './emision-lista/emision-lista.componente';
import { EmisionDetalleComponente } from './emision-detalle/emision-detalle.componente';
import { EmisionCrearComponente } from './emision-crear/emision-crear.componente';
import { EmisionEditarComponente } from './emision-editar/emision-editar.componente';
import { EmisionService } from './emision.service'; 

/**
* Imports, declarations & providers.
*/
@NgModule({
    imports:[
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
    ],
    declarations:[
        EmisionEditarComponente,
        EmisionCrearComponente,
        EmisionDetalleComponente,
        EmisionListaComponente
    ],
    providers:[EmisionService]
})

/**
* Módulo Emisión.
*/
export class EmisionModule(){
}


