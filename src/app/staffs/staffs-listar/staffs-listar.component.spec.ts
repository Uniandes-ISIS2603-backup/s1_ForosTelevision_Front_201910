import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsListarComponent } from './staffs-listar.component';

describe('StaffsListarComponent', () => {
  let component: StaffsListarComponent;
  let fixture: ComponentFixture<StaffsListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
