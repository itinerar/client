import { Component, OnInit } from '@angular/core';
import { Journey } from '../../../models/Journey';
import { JourneyService } from '../../../services/journey/journey.service';

@Component({
    selector: 'app-journeys',
    templateUrl: './journeys.component.html',
    styleUrls: ['./journeys.component.scss']
})
export class JourneysComponent implements OnInit {
    journeys: Journey[] = [];
    searchTerm = '';
    private data: Journey[];

    constructor(private journeyService: JourneyService) {
    }

    async ngOnInit() {
        this.data = await this.journeyService.get();
    }

    searchJourneys() {
        const length = 12 - this.searchTerm.length;
        this.journeys = [];
        Array.from(Array(length)).forEach(() => {
            this.journeys.push(this.data.random());
        });
    }
}
