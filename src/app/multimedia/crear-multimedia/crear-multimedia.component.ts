import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';
import {ToastrService} from 'ngx-toastr';
import {Multimedia} from '../multimedia';
import {MultimediaService} from '../multimedia.service';
import {__await} from "tslib";

@Component({
    selector: 'app-crear-multimedia',
    templateUrl: './crear-multimedia.component.html',
    styleUrls: ['./crear-multimedia.component.css'],
})
export class CrearMultimediaComponent implements OnInit {

    /**
     * Lista de archivos seleccionados
     */
    selectedFiles: FileList;
    /**
     * Url de imagenes almacenadas Firebase
     */
    imagenesUrl: string[];
    /**
     * Estado de carga de imagenes
     */
    imagenesEstado: any[];
    /**
     * Portada de imagen
     */
    portada = '';
    /**
     * Porcentaje de carga de portada
     */
    porcentajePortada = 'Cargar Portada';
    /**
     * Video referenciado
     */
    video: string;

    /**
     * Constructor de componente
     * @param multimediaService servicio http
     * @param router redireccion de componentes
     * @param toastrService notificacion en UI
     */
    constructor(private multimediaService: MultimediaService, private router: Router, private toastrService: ToastrService) {
    }

    /**
     * Evento de inicilizar componente
     */
    ngOnInit() {
        this.imagenesUrl = new Array();
        this.imagenesEstado = new Array();
        for (let i = 0; i < 4; i++) {
            this.imagenesEstado.push({estado: `Cargar Imagen ${i}`, id: i});
            this.imagenesUrl.push('');
        }
    }

    /**
     * Almacenamiento de portada firebase
     */
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

    /**
     * Evento de seleccion de archivo
     * @param event evento de seleccion
     */
    selectPortada(event) {
        this.selectedFiles = event.target.files;
        if (this.selectedFiles.length > 0) {
            this.cargarPortada();
        }
    }

    /**
     * Seleccion de multiples imagenes
     * @param event evento de formulario
     * @param estado de carga unico
     */
    selectImg(event, estado: any) {
        console.log('evento', event);
        if (event.target.files.length > 0) {
            this.cargarImg(event.target.files, estado);
        }
    }

    /**
     * Cargar una imagen
     * @param files lista de archivos
     * @param estado de carga
     */
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

    /**
     * Guardar la instancia de persistencia en backend
     */
    async guardar() {
        const m: Multimedia = {id: 0, portada: this.portada, video: this.video, imagenes: this.imagenesUrl};
        this.multimediaService.registrar(m).then(
            (info) => {
                console.log('registro M', info);
                this.imagenesUrl.forEach((value) => {
                    this.multimediaService.registrarImagenes(info.data.id, value);
                });
                this.toastrService.success('Registro', 'Registro Realizado');
                this.router.navigate(['/admin/multimedia/lista']);
            });
    }

}
