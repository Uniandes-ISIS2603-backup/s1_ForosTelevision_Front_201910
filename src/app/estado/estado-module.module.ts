import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {EstadoListaComponent} from './estado-lista/estado-lista.component';
import {EstadoServiceService} from './estado-service.service';
import {EstadoEditComponent} from './estado-edit/estado-edit.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
    ],
    declarations: [EstadoListaComponent, EstadoEditComponent],
    providers: [EstadoServiceService],
})
export class EstadoModuleModule {
}
