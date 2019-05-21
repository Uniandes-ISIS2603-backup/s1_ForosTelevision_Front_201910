import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Multimedia} from '../multimedia';
import {MultimediaService} from '../multimedia.service';

@Component({
    selector: 'app-edit-multimedia',
    templateUrl: './edit-multimedia.component.html',
    styleUrls: ['./edit-multimedia.component.css'],
})

export class EditMultimediaComponent implements OnInit {
    /**
     * Instancia de multimedia
     */
    multimedia: Multimedia;
    /**
     * Seleccion de archivos
     */
    selectedFiles: FileList;
    /**
     * Archivo de portada
     */
    portada = '';
    /**
     * Porcentaje de carga
     */
    porcentajePortada = 'Cargar Portada';

    /**
     * Constructor de componente
     * @param multimediaService servicio de carga de archivos
     * @param activateRoute servicio para acceder a params url
     * @param router redireccion entre componentes
     */
    constructor(private multimediaService: MultimediaService,
                private activateRoute: ActivatedRoute,
                private router: Router,
    ) {
        this.multimedia = {id: 0, portada: '', imagenes: '', video: ''};
        this.multimedia.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit() {
    }

    /**
     * Carga de archivo de portada
     */
    async cargarPortada() {
        const file = this.selectedFiles.item(0);
        const cargatarea = this.multimediaService.tareaCloudStorage(file.name, file);
        cargatarea.percentageChanges().subscribe((porcentaje) => {
            this.porcentajePortada = `Cargando % ${Math.round(porcentaje)}`;
        });
        cargatarea.task.then(() => {
            this.multimediaService.referenciaCloudStorage(file.name).getDownloadURL().subscribe((url) => {
                this.portada = url;
                this.porcentajePortada = 'Cambiar Portada';
                console.log('Url portada', this.portada);
            });
        });
    }

    /**
     * Evento de selección de archivo portada
     * @param event evento de formulario
     */
    selectPortada(event) {
        this.selectedFiles = event.target.files;
        if (this.selectedFiles.length > 0) {
            this.cargarPortada();
        }
    }

    /**
     * Guardar cambios en instancia multimedia
     */
    async guardar() {
        const m: any = {id_multimedia: this.multimedia.id, imagen: this.portada};
        this.multimediaService.update(m).then(
            (info) => {
                console.log('update M', info);
                this.router.navigate(['/admin/multimedia/lista']);
            });
    }

}
