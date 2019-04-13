import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsDetailComponent } from './staffs-detail.component';

describe('StaffsDetailComponent', () => {
  let component: StaffsDetailComponent;
  let fixture: ComponentFixture<StaffsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
