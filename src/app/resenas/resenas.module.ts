import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CrearResenasComponent } from './crear-resenas/crear-resenas.component';
import { EditarResenasComponent } from './editar-resenas/editar-resenas.component';
import { ListarResenasComponent } from './listar-resenas/listar-resenas.component';
import { ResenasDetailComponent } from './resenas-detail/resenas-detail.component';

@NgModule({
  declarations: [ListarResenasComponent, ResenasDetailComponent, CrearResenasComponent, EditarResenasComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
})
export class ResenasModule { }
