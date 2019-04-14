import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { StaffsListarComponent } from './staffs-listar/staffs-listar.component';
import {StaffsService} from './staffs.service';
import { StaffsCrearComponent } from './staffs-crear/staffs-crear.component';
import { StaffsEditarComponent } from './staffs-editar/staffs-editar.component';

@NgModule({
  declarations: [StaffsListarComponent, StaffsCrearComponent, StaffsEditarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [StaffsService],
})
export class StaffsModule { }
