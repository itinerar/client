import { TestBed } from '@angular/core/testing';

import { ItinerarService } from './itinerar.service';

describe('ItinerarService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ItinerarService = TestBed.get(ItinerarService);
        expect(service).toBeTruthy();
    });
});
