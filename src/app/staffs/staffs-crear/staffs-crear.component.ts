import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Staff} from '../staff';
import {StaffsService} from '../staffs.service';

@Component({
  selector: 'app-staffs-crear',
  templateUrl: './staffs-crear.component.html',
  styleUrls: ['./staffs-crear.component.css']
})
export class StaffsCrearComponent implements OnInit {

  /**
   * Constructor for the component
   * @param authService Auth service provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
      private staffsService: StaffsService,
      private toastrService: ToastrService,
      private router: Router,
  ) {
  }

  /**
   * Entidad que representa un usuario
   */
  staff: Staff;
  /**
   * Arrelgo de roles de usuario
   */
  roles: string[];

  /**
   * Envia la informacion al api
   */
  registro(): void {
    console.log('registro', this.staff);
    this.staffsService.registrarStaff(this.staff).then(
        () => {
          this.toastrService.success('Registro', 'Registro Realizado');
          this.router.navigate(['/admin/staff/lista']);
        });
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.staff = new Staff();
    this.roles = ['ACTOR', 'DIRECTOR'];
  }

}
