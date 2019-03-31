import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Multimedia} from "../multimedia";
import {MultimediaService} from '../multimedia.service';

@Component({
    selector: 'app-crear-multimedia',
    templateUrl: './crear-multimedia.component.html',
    styleUrls: ['./crear-multimedia.component.css'],
})
export class CrearMultimediaComponent implements OnInit {

    selectedFiles: FileList;
    imagenesUrl: string[];
    imagenesEstado: any[];
    portada = '';
    porcentajePortada = 'Cargar Portada';
    video: string;

    constructor(private multimediaService: MultimediaService, private router: Router) {
    }

    ngOnInit() {
        this.imagenesUrl = new Array();
        this.imagenesEstado = new Array();
        for (let i = 0; i < 4; i++) {
            this.imagenesEstado.push({estado: `Cargar Imagen ${i}`, id: i});
            this.imagenesUrl.push('');
        }
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

    selectImg(event, estado: any) {
        console.log('evento', event);
        if (event.target.files.length > 0) {
            this.cargarImg(event.target.files, estado);
        }
    }

    async cargarImg(files: FileList, estado: any) {
        const file = files.item(0);
        const cargatarea = this.multimediaService.tareaCloudStorage(file.name, file);
        await cargatarea.percentageChanges().subscribe((porcentaje) => {
            estado.estado = `Cargando % ${Math.round(porcentaje)}`;
        });
        cargatarea.task.then(() => {
            this.multimediaService.referenciaCloudStorage(file.name).getDownloadURL().subscribe((url) => {
                this.imagenesUrl.splice(estado.id, 0, url);
                console.log('Url portada', this.portada);
            });
        });
    }

    guardar() {
        const m: Multimedia = {id: 0, portada: this.portada, imagenes: this.imagenesUrl, video: this.video};
        this.multimediaService.registrar(m).then(
            (info) => {
                console.log('registro M', info);
                this.toastrService.success('Registro', 'Registro Realizado');
                this.router.navigate(['/admin/usuario/lista']);
            });
    }

}
