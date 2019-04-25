import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { JourneyService } from '../../../services/journey/journey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Journey } from '../../../models/Journey';
import { AuthService } from '../../../services/auth-service/auth.service';
import { User } from '../../../models/User';
import { Subscription } from 'rxjs';
import { PostService } from '../../../services/post/post.service';
import { Post } from '../../../models/Post';
import MapOptions = google.maps.MapOptions;

@Component({
    selector: 'app-journey',
    templateUrl: './journey.component.html',
    styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit, OnDestroy {

    @ViewChild('map') mapElement: ElementRef;
    map: google.maps.Map;

    journey: Journey;
    posts: Post[] = [];
    journeys: object[];
    locations: object[] = [];
    user: User;
    private navigationSubscription: Subscription;

    constructor(
        private journeyService: JourneyService,
        private postService: PostService,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.journeys = [];

        // this.navigationSubscription = this.router.events.subscribe(() => {
        //     this.init();
        // });
    }

    print() {
        console.log('post ->', this.journeys);
    }

    next() {
        console.log('post ->', this.journeys);
        this.journeys.push(this.locations);
        this.locations = [];
    }

    async ngOnInit() {
        await this.init();
    }

    async copy() {
        const journey = await this.journeyService.copy(this.journey);
        await this.router.navigate(['/journey', journey.id]);
        // const journey = new Journey();
        // journey.id = this.journey.id + 100;
        // journey.user = this.user;
        // journey.name = this.journey.name;
        // journey.description = this.journey.description;
        // journey.checkpoints = this.journey.checkpoints;
        // journey.parent = this.journey;
        // await this.journeyService.save(journey);
        //
        // await this.router.navigate(['/journey', journey.id]);
        await this.init();
    }

    ngOnDestroy(): void {
        // this.navigationSubscription.unsubscribe();
    }

    private async init() {
        const id = Number(this.activatedRoute.snapshot.params.id);
        this.journey = await this.journeyService.find(id);
        this.posts = await this.postService.posts(this.journey);
        this.user = await this.authService.user();

        const mapProperties: MapOptions = {
            center: new google.maps.LatLng(45.505112694193386, 25.089809570312468),
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

        // const coordinates = [
        //     {'lat': 45.537466276962185, 'lng': 24.291927490234343},
        //     {'lat': 45.62205079293879, 'lng': 24.495174560546843},
        //     {'lat': 45.67581096030572, 'lng': 24.843990478515593},
        //     {'lat': 45.56439335383774, 'lng': 25.170833740234343},
        //     {'lat': 45.44504692944411, 'lng': 25.437252197265593},
        //     {'lat': 45.31579133766204, 'lng': 25.497677001953093}
        // ];
        if (!this.journey.checkpoints || !this.journey.checkpoints.length) {
            return;
        }
        const path = new google.maps.Polyline({
            path: this.journey.checkpoints.map(checkpoint => ({lat: checkpoint.latitude, lng: checkpoint.longitude})),
            geodesic: true,
            strokeColor: '#1b4cff',
            strokeOpacity: 0.5,
            strokeWeight: 8
        });
        path.setMap(this.map);

        this.journey.checkpoints.forEach(checkpoint => {
            new google.maps.Marker({
                position: {lat: checkpoint.latitude, lng: checkpoint.longitude},
                map: this.map,
                // icon: {
                //     url: this.journey.posts[0].photos[0].path,
                //     scaledSize: new google.maps.Size(75, 50),
                // origin: new google.maps.Point(0, 0),
                // anchor: new google.maps.Point(0, 0)
                // },
                title: 'Hello World!'
            });
        });

        const bounds = new google.maps.LatLngBounds();
        this.journey.checkpoints.forEach(checkpoint => {
            bounds.extend({lat: checkpoint.latitude, lng: checkpoint.longitude});
        });
        this.map.fitBounds(bounds);
        this.map.setZoom(2);

        google.maps.event.addListener(this.map, 'click', (event: google.maps.MouseEvent) => {
            console.log('eve ->', event);
            const latitude = event.latLng.lat();
            const longitude = event.latLng.lng();
            this.locations.push({
                lat: latitude,
                lng: longitude,
            });

            console.log('coordinates ->', latitude, longitude);
        });
    }
}
