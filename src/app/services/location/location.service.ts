import { Injectable } from '@angular/core';
import { locations } from '../data';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    get() {
        return locations;
    }
}
