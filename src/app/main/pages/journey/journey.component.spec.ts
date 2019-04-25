import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Journeycomponent } from './journey.component';

describe('LocationComponent', () => {
    let component: Journeycomponent;
    let fixture: ComponentFixture<Journeycomponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Journeycomponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Journeycomponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
