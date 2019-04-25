import { Injectable } from '@angular/core';
import { BaseService } from '../BaseService';
import { Journey } from '../../models/Journey';
import { journeys } from '../data';
import { User } from '../../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class JourneyService extends BaseService<Journey> {

    constructor(http: HttpClient) {
        super(http);
    }

    get data() {
        return journeys;
    }

    userJourneys(user: User): Promise<Journey[]> {
        // const data = this.data.filter(journey => journey.user.id === user.id);
        // return Promise.resolve(data);
        return super.get(`journeys/${user.id}`);
    }

    save(journey: Journey) {
        // return Promise.resolve(true);
        const formData = new FormData();
        formData.append('name', journey.name);
        formData.append('description', journey.description);
        // return super.post(`journey`, formData);
        return super.post(`journey`, journey);
    }

    get() {
        return super.get(`journeys`);
    }

    forUser(id: number) {
        return super.get(`journeys/${id}`);
    }

    find(id: string | number) {
        return super.find(`journey/${id}`);
    }

    copy(journey: Journey) {
        return super.get(`copyJourney/${journey.id}`) as Promise<Journey>;
    }
}
