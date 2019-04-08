import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {CanalesService} from './canales.service';
import {ListarCanalesComponent} from './listar-canales/listar-canales.component';

@NgModule({
  imports: [
    CommonModule,
      AppRoutingModule,
  ],
  declarations: [ListarCanalesComponent],
  providers: [CanalesService],
})
export class CanalesModule { }
