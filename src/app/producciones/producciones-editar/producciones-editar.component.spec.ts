import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionesEditarComponent } from './producciones-editar.component';

describe('ProduccionesEditarComponent', () => {
  let component: ProduccionesEditarComponent;
  let fixture: ComponentFixture<ProduccionesEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduccionesEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduccionesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
