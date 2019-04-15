import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionesDetalleComponent } from './producciones-detalle.component';

describe('ProduccionesDetalleComponent', () => {
  let component: ProduccionesDetalleComponent;
  let fixture: ComponentFixture<ProduccionesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduccionesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduccionesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
