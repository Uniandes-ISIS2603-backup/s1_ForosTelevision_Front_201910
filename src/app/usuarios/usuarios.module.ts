import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {ApiService} from './api.service';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import {UsuarioListaComponent} from './usuario-lista/usuario-lista.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [UsuarioListaComponent, UsuarioDetalleComponent],
  providers: [ApiService],
})
export class UsuariosModule { }
