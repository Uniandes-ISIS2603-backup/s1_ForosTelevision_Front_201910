import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxPermissionsService, NgxRolesService} from 'ngx-permissions';
import 'rxjs/add/operator/catch';
import {User} from './user';

const API_URL = 'http://localhost:8080/s1_foros-api/api/usuarios/';
const login = 'login';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {
    /**
     * Constructor of the service
     * @param http
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor(private http: HttpClient,
                private router: Router,
                private roleService: NgxRolesService,
                private permissionsService: NgxPermissionsService) {
    }

    start(): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review']);
        const role = localStorage.getItem('role');
        if (!role) {
            this.setGuestRole();
        } else if (role === 'ADMIN') {
            this.setAdministratorRole();
        } else {
            this.setClientRole();
        }
    }

    setGuestRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setClientRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('CLIENT', ['leave_review']);
        localStorage.setItem('role', 'CLIENT');
    }

    setAdministratorRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('role', 'ADMIN');
    }

    printRole(): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login(role): void {
        if (role === 'ADMINISTRADOR') {
            this.setAdministratorRole();
            this.router.navigateByUrl('/admin');
        } else {
            this.setClientRole();
            this.router.navigateByUrl('/usuario');
        }
    }

    /**
     * Logs the user out
     */
    logout(): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
    }

    veriificarCredenciales(usuario: User): Promise<any> {
        const body = {email: usuario.email, password: usuario.password};
        return this.http.post<any>(API_URL + login, body).toPromise();
    }
}
