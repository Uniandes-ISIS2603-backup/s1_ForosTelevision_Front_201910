import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCanalesComponent } from './listar-canales.component';

describe('ListarCanalesComponent', () => {
  let component: ListarCanalesComponent;
  let fixture: ComponentFixture<ListarCanalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCanalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCanalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
