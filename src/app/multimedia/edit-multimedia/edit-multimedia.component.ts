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

    multimedia: Multimedia;
    selectedFiles: FileList;
    portada = '';
    porcentajePortada = 'Cargar Portada';

    constructor(private multimediaService: MultimediaService,
                private activateRoute: ActivatedRoute,
                private router: Router,
    ) {
        this.multimedia = {id: 0, portada: '', imagenes: '', video: ''};
        this.multimedia.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit() {

    }

    async cargarPortada() {
        const file = this.selectedFiles.item(0);
        const cargatarea = this.multimediaService.tareaCloudStorage(file.name, file);
        await cargatarea.percentageChanges().subscribe((porcentaje) => {
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

    selectPortada(event) {
        this.selectedFiles = event.target.files;
        if (this.selectedFiles.length > 0) {
            this.cargarPortada();
        }
    }

    async guardar() {
        const m: any = {id_multimedia: this.multimedia.id, imagen: this.portada};
        await this.multimediaService.update(m).then(
            (info) => {
                console.log('update M', info);
                this.router.navigate(['/admin/multimedia/lista']);
            });
    }

}
