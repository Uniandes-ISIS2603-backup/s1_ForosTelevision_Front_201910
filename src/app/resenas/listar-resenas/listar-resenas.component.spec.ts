import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarResenasComponent } from './listar-resenas.component';

describe('ListarResenasComponent', () => {
  let component: ListarResenasComponent;
  let fixture: ComponentFixture<ListarResenasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarResenasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
