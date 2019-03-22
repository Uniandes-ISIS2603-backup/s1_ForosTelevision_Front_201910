import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsuarioListaComponent, UsuarioDetalleComponent]
})
export class UsuariosModule { }
