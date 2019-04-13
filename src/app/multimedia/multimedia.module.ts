import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {CrearMultimediaComponent} from './crear-multimedia/crear-multimedia.component';
import { ListadoComponent } from './listado/listado.component';
import {MultimediaService} from './multimedia.service';
import {EditMultimediaComponent} from './edit-multimedia/edit-multimedia.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
      FormsModule,
  ],
    declarations: [ListadoComponent, CrearMultimediaComponent, EditMultimediaComponent],
    providers: [MultimediaService],
})
export class MultimediaModule { }
