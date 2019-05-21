import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {ApiService} from './api.service';
import {UsuarioCreateComponent} from './usuario-create/usuario-create.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import {UsuarioEditComponent} from './usuario-edit/usuario-edit.component';
import {UsuarioListaComponent} from './usuario-lista/usuario-lista.component';
import { UsuarioSeguirComponent } from './usuario-seguir/usuario-seguir.component';
import { UsuarioRecomendacionComponent } from './usuario-recomendacion/usuario-recomendacion.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
    declarations: [UsuarioListaComponent, UsuarioDetalleComponent, UsuarioEditComponent, UsuarioCreateComponent, UsuarioSeguirComponent, UsuarioRecomendacionComponent],
  providers: [ApiService],
})
export class UsuariosModule { }
