import {TestBed} from '@angular/core/testing';

import {EstadoServiceService} from './estado-service.service';

describe('EstadoServiceService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: EstadoServiceService = TestBed.get(EstadoServiceService);
        expect(service).toBeTruthy();
    });
});
