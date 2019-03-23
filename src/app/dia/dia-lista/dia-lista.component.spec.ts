import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiaListaComponent} from './dia-lista.component';

describe('DiaListaComponent', () => {
    let component: DiaListaComponent;
    let fixture: ComponentFixture<DiaListaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DiaListaComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DiaListaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
