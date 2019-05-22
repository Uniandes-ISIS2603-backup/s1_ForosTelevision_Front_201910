import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionesListarUsuarioComponent } from './producciones-listar-usuario.component';

describe('ProduccionesListarUsuarioComponent', () => {
  let component: ProduccionesListarUsuarioComponent;
  let fixture: ComponentFixture<ProduccionesListarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduccionesListarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduccionesListarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
