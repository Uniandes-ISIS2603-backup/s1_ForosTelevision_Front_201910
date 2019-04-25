import { TestBed } from '@angular/core/testing';

import { ProductoraService } from './productora.service';

describe('ProductoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoraService = TestBed.get(ProductoraService);
    expect(service).toBeTruthy();
  });
});
