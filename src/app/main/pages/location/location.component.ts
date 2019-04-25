import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ItinerarService } from '../../../services/itinerar/itinerar.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

    @ViewChild('gmap') mapElement: ElementRef;
    map: google.maps.Map;

    itinerars$: Observable<{}[]>;

    constructor(public itinerarService: ItinerarService) {
    }

    ngOnInit() {
        this.itinerars$ = this.itinerarService.get();

        const mapProp = {
            center: new google.maps.LatLng(18.5793, 73.8143),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
    }
}
