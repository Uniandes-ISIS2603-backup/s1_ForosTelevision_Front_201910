import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCanalesComponent } from './editar-canales.component';

describe('EditarCanalesComponent', () => {
  let component: EditarCanalesComponent;
  let fixture: ComponentFixture<EditarCanalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCanalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCanalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
