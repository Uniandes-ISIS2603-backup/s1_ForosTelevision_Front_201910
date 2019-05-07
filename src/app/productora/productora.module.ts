import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ProductoraCreateComponent } from './productora-create/productora-create.component';
import { ProductoraEditComponent } from './productora-edit/productora-edit.component';
import { ProductoraListComponent } from './productora-list/productora-list.component';
import {ProductoraService} from './productora.service';

@NgModule({
  declarations: [ProductoraListComponent, ProductoraCreateComponent, ProductoraEditComponent],
  imports: [CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductoraService],
})
export class ProductoraModule { }
