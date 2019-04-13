import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarStaffsComponent } from './listar-staffs.component';

describe('ListarStaffsComponent', () => {
  let component: ListarStaffsComponent;
  let fixture: ComponentFixture<ListarStaffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarStaffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
