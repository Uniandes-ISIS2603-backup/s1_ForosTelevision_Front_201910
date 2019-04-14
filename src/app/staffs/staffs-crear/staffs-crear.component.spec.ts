import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsCrearComponent } from './staffs-crear.component';

describe('StaffsCrearComponent', () => {
  let component: StaffsCrearComponent;
  let fixture: ComponentFixture<StaffsCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
