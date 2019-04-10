import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCanalesComponent } from './crear-canales.component';

describe('CrearCanalesComponent', () => {
  let component: CrearCanalesComponent;
  let fixture: ComponentFixture<CrearCanalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCanalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCanalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
