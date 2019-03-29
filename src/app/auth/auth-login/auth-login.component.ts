import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {throwError} from 'rxjs';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css'],
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private router: Router,
    ) { }

    user: User;

    roles: string[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.authService.veriificarCredenciales(this.user)
            .then((data: any) => {
                console.log('login', data);
                this.authService.login(this.user.role);
                if (this.user.role === this.roles[1]) {
                    this.router.navigate(['usuario/home']);
                } else {
                    this.router.navigate(['admin']);
                }
                this.toastrService.success('¡ Ingreso Exitoso !');
            })
            .catch((reason) => {
                console.log('error', reason);
                this.user.password = '';
            });
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrator', 'Client'];
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}
