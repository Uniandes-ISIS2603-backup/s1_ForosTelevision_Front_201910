import {ICanal} from '../canales/icanal';
import {Dia} from '../dia/dia';
/** 
 * Clase Emisión
 */
 export class Emision{
 
    /**
    * Id de la emisión.
    */
    id: number;
    
    /**
    * Rating de la emisión
    */
    rating: number;
    
    /**
    * Fecha de inicio de la emisión
    */
    fechaInicio: any;
    
    /**
    * Fecha final de la emisión
    */
    fechaFin: any;
    
    /**
    * Dias de la emisión
    */
    dias: Dia[];
    
    /**
    * Canal de la emisión.
    */
    canal: ICanal;
 
 }


