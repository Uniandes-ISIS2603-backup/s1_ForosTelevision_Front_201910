import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ApiService} from '../../usuarios/api.service';
import {Usuario} from '../../usuarios/usuario';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-auth-sign-up',
    templateUrl: './auth-sign-up.component.html',
    styleUrls: ['./auth-sign-up.component.css'],
})
export class AuthSignUpComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private apiService: ApiService,
        private toastrService: ToastrService,
    ) { }

    user: Usuario;

    /**
    * Sign the user up with the selected role
    */
    signUp(): void {
        this.apiService.registrarUsuario(this.user).then(
            (user) => {
                console.log('user registro', user);
                this.authService.login(this.user.privilegio);
                this.toastrService.success('Registro exitoso');
            },
        );
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new Usuario();
        this.user.privilegio = 'USUARIO';
    }

}
