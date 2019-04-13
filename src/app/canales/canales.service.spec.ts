import { TestBed } from '@angular/core/testing';

import { CanalesService } from './canales.service';

describe('CanalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanalesService = TestBed.get(CanalesService);
    expect(service).toBeTruthy();
  });
});
