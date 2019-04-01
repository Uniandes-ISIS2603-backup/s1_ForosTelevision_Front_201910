import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {DiaCreateComponent} from './dia-create/dia-create.component';
import {DiaListaComponent} from './dia-lista/dia-lista.component';

@NgModule({
    declarations: [DiaCreateComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [DiaListaComponent],
})
export class DiaModule {
}
