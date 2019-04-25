import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoraEditComponent } from './productora-edit.component';

describe('ProductoraEditComponent', () => {
  let component: ProductoraEditComponent;
  let fixture: ComponentFixture<ProductoraEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoraEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
