import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CreateComponentOptions} from '@angular/core/src/render3/component';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {AdminComponent} from '../admin/admin.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {CanalDetailComponent} from '../canales/canal-detail/canal-detail.component';
import {CrearCanalesComponent} from '../canales/crear-canales/crear-canales.component';
import {EditarCanalesComponent} from '../canales/editar-canales/editar-canales.component';
import {ListarResenasComponent} from '../resenas/listar-resenas/listar-resenas.component';
import {ListarCanalesComponent} from '../canales/listar-canales/listar-canales.component';
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

            {
                path: 'canales/lista',
                pathMatch: 'full',
                component: ListarCanalesComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'canales/lista/:id',
                pathMatch: 'full',
                component: CanalDetailComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },

            {
                path: 'canales/editar/:id',
                pathMatch: 'full',
                component: EditarCanalesComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'canales/create/',
                pathMatch: 'full',
                component: CrearCanalesComponent,
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

    {
        path: 'canales/editar/:id',
        pathMatch: 'full',
        component: EditarCanalesComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['ADMIN'],
            },
        },
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
