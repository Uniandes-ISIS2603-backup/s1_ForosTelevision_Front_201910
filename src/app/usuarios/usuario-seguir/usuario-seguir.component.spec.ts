import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioSeguirComponent } from './usuario-seguir.component';

describe('UsuarioSeguirComponent', () => {
  let component: UsuarioSeguirComponent;
  let fixture: ComponentFixture<UsuarioSeguirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioSeguirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioSeguirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
