import { TestBed } from '@angular/core/testing';

import { ProduccionesService } from './producciones.service';

describe('ApiService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ProduccionesService = TestBed.get(ProduccionesService);
        expect(service).toBeTruthy();
    });
});
