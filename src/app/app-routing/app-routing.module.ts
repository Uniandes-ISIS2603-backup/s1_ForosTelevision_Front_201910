import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {AdminComponent} from '../admin/admin.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {CanalDetailComponent} from '../canales/canal-detail/canal-detail.component';
import {CrearCanalesComponent} from '../canales/crear-canales/crear-canales.component';
import {EditarCanalesComponent} from '../canales/editar-canales/editar-canales.component';
import {ListarCanalesComponent} from '../canales/listar-canales/listar-canales.component';
import {CategoriaCreateComponent} from '../categoria/categoria-create/categoria-create.component';
import {CategoriaEditComponent} from '../categoria/categoria-edit/categoria-edit.component';
import {CategoriaListComponent} from '../categoria/categoria-list/categoria-list.component';
import {EstadoEditComponent} from '../estado/estado-edit/estado-edit.component';
import {EstadoListaComponent} from '../estado/estado-lista/estado-lista.component';
import {InvitadoComponent} from '../invitado/invitado.component';
import {CrearMultimediaComponent} from '../multimedia/crear-multimedia/crear-multimedia.component';
import {EditMultimediaComponent} from '../multimedia/edit-multimedia/edit-multimedia.component';
import {ListadoComponent} from '../multimedia/listado/listado.component';
import {ProduccionesDetalleComponent} from '../producciones/producciones-detalle/producciones-detalle.component';
import {ProduccionesListarComponent} from '../producciones/producciones-listar/producciones-listar.component';
import {ProductoraCreateComponent} from '../productora/productora-create/productora-create.component';
import {ProductoraEditComponent} from '../productora/productora-edit/productora-edit.component';
import {ProductoraListComponent} from '../productora/productora-list/productora-list.component';
import {CrearResenasComponent} from '../resenas/crear-resenas/crear-resenas.component';
import {EditarResenasComponent} from '../resenas/editar-resenas/editar-resenas.component';
import {ListarResenasComponent} from '../resenas/listar-resenas/listar-resenas.component';
import {ResenasDetailComponent} from '../resenas/resenas-detail/resenas-detail.component';
import {UsuarioComponent} from '../usuario/usuario.component';
import {UsuarioCreateComponent} from '../usuarios/usuario-create/usuario-create.component';
import {UsuarioDetalleComponent} from '../usuarios/usuario-detalle/usuario-detalle.component';
import {UsuarioEditComponent} from '../usuarios/usuario-edit/usuario-edit.component';
import { UsuarioListaComponent } from '../usuarios/usuario-lista/usuario-lista.component';
import {UsuarioRecomendacionComponent} from '../usuarios/usuario-recomendacion/usuario-recomendacion.component';
import {UsuarioSeguirComponent} from '../usuarios/usuario-seguir/usuario-seguir.component';
import { ProduccionesCrearComponent } from '../producciones/producciones-crear/producciones-crear.component';
import { ProduccionesEditarComponent } from '../producciones/producciones-editar/producciones-editar.component';
import { StaffsListarComponent } from '../staffs/staffs-listar/staffs-listar.component';
import { StaffsDetalleComponent } from '../staffs/staffs-detalle/staffs-detalle.component';
import { StaffsCrearComponent } from '../staffs/staffs-crear/staffs-crear.component';
import { StaffsEditarComponent } from '../staffs/staffs-editar/staffs-editar.component';

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
        component: UsuarioComponent,
        children: [
            {
                path: 'seguir',
                component: UsuarioSeguirComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['CLIENT'],
                    },
                },
            },
            {
                path: 'recomendacion',
                component: UsuarioRecomendacionComponent,
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
                path: 'usuario/estado/edit/:id',
                pathMatch: 'full',
                component: EstadoEditComponent,
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
                path: 'usuario/create',
                pathMatch: 'full',
                component: UsuarioCreateComponent,
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
                path: 'usuario/editar/:id',
                pathMatch: 'full',
                component: UsuarioEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'canales/crear/',
                pathMatch: 'full',
                component: CrearCanalesComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
          {
                path: 'multimedia/create',
                pathMatch: 'full',
                component: CrearMultimediaComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'multimedia/lista',
                pathMatch: 'full',
                component: ListadoComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'multimedia/edit/:id',
                pathMatch: 'full',
                component: EditMultimediaComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'resenas/lista',
                pathMatch: 'full',
                component: ListarResenasComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'resenas/lista/:id',
                pathMatch: 'full',
                component: ResenasDetailComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'resenas/create',
                pathMatch: 'full',
                component: CrearResenasComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'resenas/editar/:id',
                pathMatch: 'full',
                component: EditarResenasComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'producciones/lista',
                pathMatch: 'full',
                component: ProduccionesListarComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','GUEST'],
                    },
                },
            },
            {
                path: 'producciones/lista/:id',
                pathMatch: 'full',
                component: ProduccionesDetalleComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'producciones/crear',
                pathMatch: 'full',
                component: ProduccionesCrearComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'producciones/editar/:id',
                pathMatch: 'full',
                component: ProduccionesEditarComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'categoria/lista',
                pathMatch: 'full',
                component: CategoriaListComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'categoria/editar/:id',
                pathMatch: 'full',
                component: CategoriaEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'categoria/create',
                pathMatch: 'full',
                component: CategoriaCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'productora/lista',
                pathMatch: 'full',
                component: ProductoraListComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'productora/editar/:id',
                pathMatch: 'full',
                component: ProductoraEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'productora/create',
                pathMatch: 'full',
                component: ProductoraCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'staff/lista',
                pathMatch: 'full',
                component: StaffsListarComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN','GUEST'],
                    },
                },
            },
            {
                path: 'staff/lista/:id',
                pathMatch: 'full',
                component: StaffsDetalleComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'staff/crear',
                pathMatch: 'full',
                component: StaffsCrearComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN'],
                    },
                },
            },
            {
                path: 'staff/editar/:id',
                pathMatch: 'full',
                component: StaffsEditarComponent,
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
