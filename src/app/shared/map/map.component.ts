import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    @ViewChild('map') mapElement: ElementRef;
    map: google.maps.Map;

    @Input() center: [number, number] = [45.45, 9.45];

    ngOnInit() {
        const mapProperties = {
            center: new google.maps.LatLng(this.center[0], this.center[1]),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    }
}
