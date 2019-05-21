import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import {CategoriaService} from './categoria.service';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';

@NgModule({
  declarations: [CategoriaEditComponent, CategoriaListComponent, CategoriaCreateComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CategoriaService],
})
export class CategoriaModule { }
