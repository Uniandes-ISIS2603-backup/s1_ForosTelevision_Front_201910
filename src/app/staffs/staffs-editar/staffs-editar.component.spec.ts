import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsEditarComponent } from './staffs-editar.component';

describe('StaffsEditarComponent', () => {
  let component: StaffsEditarComponent;
  let fixture: ComponentFixture<StaffsEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
