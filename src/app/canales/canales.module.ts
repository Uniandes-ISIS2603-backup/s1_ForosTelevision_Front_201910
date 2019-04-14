import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { CanalDetailComponent } from './canal-detail/canal-detail.component';
import {CanalesService} from './canales.service';
import {ListarCanalesComponent} from './listar-canales/listar-canales.component';
import { EditarCanalesComponent } from './editar-canales/editar-canales.component';
import { CrearCanalesComponent } from './crear-canales/crear-canales.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [ListarCanalesComponent, CanalDetailComponent, EditarCanalesComponent, CrearCanalesComponent],
  providers: [CanalesService],
})
export class CanalesModule { }
