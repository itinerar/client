import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ItinerarService {
    private itinerars = [
        {},
        {},
        {},
        {},
        {},
        {},
    ];

    constructor() {
    }

    get() {
        return of(this.itinerars);
    }
}
