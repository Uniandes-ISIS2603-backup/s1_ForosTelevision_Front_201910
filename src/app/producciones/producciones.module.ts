import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {MultimediaService} from '../multimedia/multimedia.service';
import {ProduccionesService} from '../producciones/producciones.service';
import {ProductorasService} from '../productoras/productoras.service';
import { ProduccionesCrearComponent } from './producciones-crear/producciones-crear.component';
import { ProduccionesListarComponent } from './producciones-listar/producciones-listar.component';
import { ProduccionesDetalleComponent } from './producciones-detalle/producciones-detalle.component';
import { ProduccionesEditarComponent } from './producciones-editar/producciones-editar.component';

@NgModule({
  declarations: [ProduccionesListarComponent, ProduccionesCrearComponent, ProduccionesDetalleComponent, ProduccionesEditarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProduccionesService, ProductorasService, MultimediaService],
})
export class ProduccionesModule { }
