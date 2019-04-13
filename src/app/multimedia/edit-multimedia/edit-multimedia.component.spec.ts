import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditMultimediaComponent} from './edit-multimedia.component';

describe('EditMultimediaComponent', () => {
    let component: EditMultimediaComponent;
    let fixture: ComponentFixture<EditMultimediaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditMultimediaComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditMultimediaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
