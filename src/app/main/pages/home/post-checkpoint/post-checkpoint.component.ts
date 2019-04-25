import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Checkpoint } from '../../../../models/Checkpoint';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import MapOptions = google.maps.MapOptions;

@Component({
    selector: 'app-post-checkpoint',
    templateUrl: './post-checkpoint.component.html',
    styleUrls: ['./post-checkpoint.component.scss']
})
export class PostCheckpointComponent implements OnInit {

    @ViewChild('map') mapElement: ElementRef;
    map: google.maps.Map;
    checkpoint = new Checkpoint();
    marker: google.maps.Marker;

    constructor(
        public dialogRef: MatDialogRef<PostCheckpointComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {}) {
    }

    ngOnInit() {
        const mapProperties: MapOptions = {
            center: new google.maps.LatLng(45.505112694193386, 25.089809570312468),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

        if (this.marker) {
            this.marker.setMap(null);
        }

        google.maps.event.addListener(this.map, 'click', (event: google.maps.MouseEvent) => {
            this.checkpoint.latitude = event.latLng.lat();
            this.checkpoint.longitude = event.latLng.lng();
            this.marker = new google.maps.Marker({
                position: {lat: this.checkpoint.latitude, lng: this.checkpoint.longitude},
                map: this.map,
            });

        });
    }

}
