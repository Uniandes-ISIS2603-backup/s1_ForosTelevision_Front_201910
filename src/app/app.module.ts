import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalDialogModule} from 'ngx-modal-dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxPermissionsModule} from 'ngx-permissions';
import {ToastrModule} from 'ngx-toastr';
import {CanalesModule} from './canales/canales.module';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';

import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {AdminComponent} from './admin/admin.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {DiaModule} from './dia/dia.module';
import {EstadoModuleModule} from './estado/estado-module.module';
import { InvitadoComponent } from './invitado/invitado.component';
import {MultimediaModule} from './multimedia/multimedia.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
    declarations: [
        AppComponent,
        InvitadoComponent,
        UsuarioComponent,
        AdminComponent,
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
        AppRoutingModule,
        UsuariosModule,
        EstadoModuleModule,
        DiaModule,
        MultimediaModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        CanalesModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
    ],
})
export class AppModule {}
