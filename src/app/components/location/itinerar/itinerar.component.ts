import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-itinerar',
    templateUrl: './itinerar.component.html',
    styleUrls: ['./itinerar.component.scss']
})
export class ItinerarComponent implements OnInit {

    @Input() itinerar: any;

    constructor() {
    }

    ngOnInit() {

    }

}
