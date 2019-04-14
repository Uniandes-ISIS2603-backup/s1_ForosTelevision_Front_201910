import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { StaffsListarComponent } from './staffs-listar/staffs-listar.component';
import {StaffsService} from './staffs.service';

@NgModule({
  declarations: [StaffsListarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [StaffsService],
})
export class StaffsModule { }
