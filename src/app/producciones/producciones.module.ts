import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ProduccionesListarComponent } from './producciones-listar/producciones-listar.component';

@NgModule({
  declarations: [ProduccionesListarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
})
export class ProduccionesModule { }
