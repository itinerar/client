import {Component, Input, OnInit} from '@angular/core';
import {Journey} from '../../../models/Journey';

@Component({
    selector: 'app-profile-journey',
    templateUrl: './journey.component.html',
    styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

    @Input() journey: Journey;

    constructor() {
    }

    ngOnInit() {
    }

}
