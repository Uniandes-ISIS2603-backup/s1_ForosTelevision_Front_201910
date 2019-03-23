import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {DiaListaComponent} from './dia-lista/dia-lista.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    providers: [DiaListaComponent],
})
export class DiaModule {
}
