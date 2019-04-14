import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {ProduccionesService} from '../producciones/producciones.service';
import { ProduccionesCrearComponent } from './producciones-crear/producciones-crear.component';
import { ProduccionesListarComponent } from './producciones-listar/producciones-listar.component';

@NgModule({
  declarations: [ProduccionesListarComponent, ProduccionesCrearComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProduccionesService],
})
export class ProduccionesModule { }
