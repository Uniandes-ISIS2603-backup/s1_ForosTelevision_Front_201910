import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {EstadoListaComponent} from './estado-lista/estado-lista.component';
import {EstadoServiceService} from './estado-service.service';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    declarations: [EstadoListaComponent],
    providers: [EstadoServiceService],
})
export class EstadoModuleModule {
}
