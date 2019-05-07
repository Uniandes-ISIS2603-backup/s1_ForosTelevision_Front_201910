import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoraCreateComponent } from './productora-create.component';

describe('ProductoraCreateComponent', () => {
  let component: ProductoraCreateComponent;
  let fixture: ComponentFixture<ProductoraCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoraCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoraCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
