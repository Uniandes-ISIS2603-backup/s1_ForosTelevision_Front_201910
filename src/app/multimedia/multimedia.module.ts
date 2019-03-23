import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [ListadoComponent],
})
export class MultimediaModule { }
