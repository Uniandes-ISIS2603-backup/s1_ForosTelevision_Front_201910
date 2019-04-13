import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProduccionesComponent } from './crear-producciones.component';

describe('CrearProduccionesComponent', () => {
  let component: CrearProduccionesComponent;
  let fixture: ComponentFixture<CrearProduccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProduccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
