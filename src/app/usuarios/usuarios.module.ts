import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaComponent, DetalleComponent]
})
export class UsuariosModule { }
