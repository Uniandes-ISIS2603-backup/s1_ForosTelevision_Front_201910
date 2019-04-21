import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionesListarComponent } from './producciones-listar.component';

describe('ProduccionesListarComponent', () => {
  let component: ProduccionesListarComponent;
  let fixture: ComponentFixture<ProduccionesListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduccionesListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduccionesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
