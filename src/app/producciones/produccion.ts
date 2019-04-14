import { Multimedia } from '../multimedia/multimedia';
import { Productora } from '../productoras/productora';

/**
 * Interface que representa una producción
 */
export class Produccion {
    id: number;
    nombre: string;
    descripcion: string;
    clasificacionAudiencia: string;
    calificacionPromedio: number;
    productora: Productora;
    multimedia: Multimedia;
}
