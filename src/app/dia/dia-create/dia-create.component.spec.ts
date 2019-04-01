import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiaCreateComponent} from './dia-create.component';

describe('DiaCreateComponent', () => {
    let component: DiaCreateComponent;
    let fixture: ComponentFixture<DiaCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DiaCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DiaCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
