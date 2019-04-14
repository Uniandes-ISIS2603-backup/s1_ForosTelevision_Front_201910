import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsDetalleComponent } from './staffs-detalle.component';

describe('StaffsDetalleComponent', () => {
  let component: StaffsDetalleComponent;
  let fixture: ComponentFixture<StaffsDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
