import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Journey } from '../../../../models/Journey';

@Component({
    selector: 'app-new-journey',
    templateUrl: './new-journey.component.html',
    styleUrls: ['./new-journey.component.scss']
})
export class NewJourneyComponent {

    journey: Journey = new Journey();

    constructor(
        public dialogRef: MatDialogRef<NewJourneyComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {}) {
    }

}
