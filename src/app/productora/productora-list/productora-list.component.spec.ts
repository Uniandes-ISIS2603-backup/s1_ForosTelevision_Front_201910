import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoraListComponent } from './productora-list.component';

describe('ProductoraListComponent', () => {
  let component: ProductoraListComponent;
  let fixture: ComponentFixture<ProductoraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
