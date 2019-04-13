import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearStaffsComponent } from './crear-staffs.component';

describe('CrearStaffsComponent', () => {
  let component: CrearStaffsComponent;
  let fixture: ComponentFixture<CrearStaffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearStaffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
