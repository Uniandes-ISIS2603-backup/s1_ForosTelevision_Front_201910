import { ProduccionesModule } from './producciones.module';

describe('ProduccionesModule', () => {
    let produccionesModule: ProduccionesModule;

    beforeEach(() => {
        produccionesModule = new ProduccionesModule();
    });

    it('should create an instance', () => {
        expect(produccionesModule).toBeTruthy();
    });
});
