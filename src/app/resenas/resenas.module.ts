import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ListarResenasComponent } from './listar-resenas/listar-resenas.component';
import { ResenasDetailComponent } from './resenas-detail/resenas-detail.component';
import { CrearResenasComponent } from './crear-resenas/crear-resenas.component';

@NgModule({
  declarations: [ListarResenasComponent, ResenasDetailComponent, CrearResenasComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ResenasModule { }
