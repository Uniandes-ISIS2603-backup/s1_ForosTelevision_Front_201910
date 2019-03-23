import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import {AdminComponent} from '../admin/admin.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {EstadoListaComponent} from '../estado/estado-lista/estado-lista.component';
import {InvitadoComponent} from '../invitado/invitado.component';
import {UsuarioComponent} from '../usuario/usuario.component';
import {UsuarioDetalleComponent} from '../usuarios/usuario-detalle/usuario-detalle.component';
import { UsuarioListaComponent } from '../usuarios/usuario-lista/usuario-lista.component';

const routes: Routes = [

    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST'],
                    },
                },
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST'],
                    },
                },
            },
        ],
    },
    {
        path: 'usuario',
        children: [
            {
                path: 'home',
                component: UsuarioComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['CLIENT'],
                    },
                },
            },
        ],
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'usuario/lista',
                pathMatch: 'full',
                component: UsuarioListaComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'usuario/lista/:id',
                pathMatch: 'full',
                component: UsuarioDetalleComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'usuario/estado/:id',
                pathMatch: 'full',
                component: EstadoListaComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
        ],
    },
    {
        path: 'home',
        component: AuthLoginComponent,
    },
    {
        path: '**',
        component: InvitadoComponent,
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    ],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule {

}
