import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {ApiService} from '../producciones/api.service';
import { ProduccionesListarComponent } from './producciones-listar/producciones-listar.component';
import { ProduccionesCrearComponent } from './producciones-crear/producciones-crear.component';

@NgModule({
  declarations: [ProduccionesListarComponent, ProduccionesCrearComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ApiService],
})
export class ProduccionesModule { }
