import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarResenasComponent } from './editar-resenas.component';

describe('EditarResenasComponent', () => {
  let component: EditarResenasComponent;
  let fixture: ComponentFixture<EditarResenasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarResenasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
