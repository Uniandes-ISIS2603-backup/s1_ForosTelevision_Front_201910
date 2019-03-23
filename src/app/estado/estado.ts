/**
 * Interface de estado de producciones vistas por usuario
 */
export interface Estado {
    id: number;
    capitulos_vistos: number;
    vista: number;
    favorita: number;
    na: number;
    serie: any;
}
