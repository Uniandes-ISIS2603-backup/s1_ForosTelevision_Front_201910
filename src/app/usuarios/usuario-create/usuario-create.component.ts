import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from '../api.service';
import {Usuario} from '../usuario';

@Component({
    selector: 'app-usuario-create',
    templateUrl: './usuario-create.component.html',
    styleUrls: ['./usuario-create.component.css'],
})
export class UsuarioCreateComponent implements OnInit {
    /**
     * Constructor for the component
     * @param authService Auth service provider
     * @param toastrService The toastr to show messages to the user
     */
    constructor(
        private apiService: ApiService,
        private toastrService: ToastrService,
        private router: Router,
    ) {
    }

    user: Usuario;

    roles: string[];

    registro(): void {
        console.log('registro', this.user);
        this.apiService.registrarUsuario(this.user).then(
            () => {
                this.toastrService.success('Registro', 'Registro Realizado');
                this.router.navigate(['/admin/usuario/lista']);
            });
    }

    /**
     * This function will initialize the component
     */
    ngOnInit() {
        this.user = new Usuario();
        this.roles = ['ADMINISTRADOR', 'USUARIO'];
    }

}
