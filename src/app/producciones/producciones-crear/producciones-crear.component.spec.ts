import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionesCrearComponent } from './producciones-crear.component';

describe('ProduccionesCrearComponent', () => {
  let component: ProduccionesCrearComponent;
  let fixture: ComponentFixture<ProduccionesCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduccionesCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduccionesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
