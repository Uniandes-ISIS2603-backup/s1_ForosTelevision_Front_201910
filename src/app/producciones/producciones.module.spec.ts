import { ProduccionesModule } from './producciones.module';

describe('UsuariosModule', () => {
    let produccionesModule: ProduccionesModule;

    beforeEach(() => {
        produccionesModule = new ProduccionesModule();
    });

    it('should create an instance', () => {
        expect(produccionesModule).toBeTruthy();
    });
});
