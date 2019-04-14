import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Staff} from '../staff';
import {StaffsService} from '../staffs.service';

@Component({
  selector: 'app-staffs-editar',
  templateUrl: './staffs-editar.component.html',
  styleUrls: ['./staffs-editar.component.css'],
})
export class StaffsEditarComponent implements OnInit {

  /**
   * Constructor for the component
   * @param staffsService
   * @param activateRoute
   * @param router
   * @param toastrService
   */
  constructor(
      private staffsService: StaffsService,
      private activateRoute: ActivatedRoute,
      private router: Router,
      private toastrService: ToastrService,
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  /**
   * Identificador de staff
   */
  id = 0;

  /**
   * Entidad de usuario
   */
  staff: Staff = null;

  /**
   * Arrelgo de roles de usuario
   */
  roles: string[];

  /**
   * Flag de lazy load y render lista
   */
  public flagLoad = false;

  /**
   * Carga de información en el componente
   */
  private async loadData() {
    await this.staffsService.getStaff(this.id).subscribe((informacion) => {
      this.staff = informacion;
      this.flagLoad = true;
    });
  }

  /**
   * Envia la informacion al api
   */
  actualizar() {
    console.log('Actualizar', this.staff);
    this.staffsService.actualizarStaff(this.staff).subscribe( (inf) => {
      console.log('Editar staff ', inf);
      this.router.navigate(['/admin/staff/lista']);
    });
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.loadData();
    this.roles = ['ACTOR', 'DIRECTOR'];
  }

}
