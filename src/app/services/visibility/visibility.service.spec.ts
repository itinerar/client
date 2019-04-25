import { TestBed } from '@angular/core/testing';

import { VisibilityService } from './visibility.service';

describe('VisbilityService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: VisibilityService = TestBed.get(VisibilityService);
        expect(service).toBeTruthy();
    });
});
