import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalDetailComponent } from './canal-detail.component';

describe('CanalDetailComponent', () => {
  let component: CanalDetailComponent;
  let fixture: ComponentFixture<CanalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
