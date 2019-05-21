import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { EliminarResenasComponent } from './eliminar-resenas.component';

describe('EliminarResenasComponent', () => {
  let component: EliminarResenasComponent;
  let fixture: ComponentFixture<EliminarResenasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarResenasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
