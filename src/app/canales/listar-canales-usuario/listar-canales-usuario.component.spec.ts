import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { ListarCanalesUsuarioComponent } from './listar-canales-usuario.component';

describe('ListarCanalesUsuarioComponent', () => {
  let component: ListarCanalesUsuarioComponent;
  let fixture: ComponentFixture<ListarCanalesUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCanalesUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCanalesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
