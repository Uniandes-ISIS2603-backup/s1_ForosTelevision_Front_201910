import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenasDetailComponent } from './resenas-detail.component';

describe('ResenasDetailComponent', () => {
  let component: ResenasDetailComponent;
  let fixture: ComponentFixture<ResenasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResenasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResenasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
