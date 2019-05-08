import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRecomendacionComponent } from './usuario-recomendacion.component';

describe('UsuarioRecomendacionComponent', () => {
  let component: UsuarioRecomendacionComponent;
  let fixture: ComponentFixture<UsuarioRecomendacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioRecomendacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
