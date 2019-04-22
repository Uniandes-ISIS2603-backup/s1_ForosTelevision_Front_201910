/**
* Imports
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EmisionListaComponent } from './emision-lista/emision-lista.componente';
import { EmisionDetalleComponent } from './emision-detalle/emision-detalle.componente';
import { EmisionCrearComponent } from './emision-crear/emision-crear.componente';
import { EmisionEditarComponent } from './emision-editar/emision-editar.componente';
import { EmisionService } from './emision.service'; 

/**
* Imports, declarations & providers.
*/
@NgModule({
    imports:[
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
    ],
    declarations:[
        EmisionEditarComponent,
        EmisionCrearComponent,
        EmisionDetalleComponent,
        EmisionListaComponent
    ],
    providers:[EmisionService]
})

/**
* Módulo Emisión.
*/
export class EmisionModule{
}


