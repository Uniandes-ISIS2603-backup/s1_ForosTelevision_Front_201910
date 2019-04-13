import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProduccionesComponent } from './listar-producciones.component';

describe('ListarProduccionesComponent', () => {
  let component: ListarProduccionesComponent;
  let fixture: ComponentFixture<ListarProduccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProduccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
