import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { AuthService } from '../../../services/auth-service/auth.service';
import { User } from '../../../models/User';
import { PostService } from '../../../services/post/post.service';
import { Post } from '../../../models/Post';
import { Journey } from '../../../models/Journey';
import { JourneyService } from '../../../services/journey/journey.service';
import MapOptions = google.maps.MapOptions;

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    @ViewChild('map') mapElement: ElementRef;
    map: google.maps.Map;

    images = [
        'https://authorityremedies.com/wp-content/uploads/2016/11/first-mountain-trip.jpg',
        'https://www.telegraph.co.uk/content/dam/Travel/2018/August/mountains-hallstatt.jpg?imwidth=450',
        'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/2635/SITours/dolomite-mountains-and-cortina-small-group-day-trip-from-venice-in-venice-42464.jpg',
        'https://www.rei.com/adventures/assets/adventures/images/trip/core/europe/etm_hero',
        'https://www.rei.com/adventures/assets/adventures/images/trip/gallery/africa/lem_01',
        'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3142/SITours/pyrenees-mountains-small-group-day-trip-from-barcelona-in-barcelona-115256.jpg',
        'https://www.telegraph.co.uk/content/dam/Travel/2018/August/mountains-hallstatt.jpg?imwidth=450',
        'https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/201409-w-best-countries-for-solo-travelers-finland.jpg?itok=v-cFz9bh',
        'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/2635/SITours/dolomite-mountains-and-cortina-small-group-day-trip-from-venice-in-venice-42464.jpg',
        'https://www.rei.com/adventures/assets/adventures/images/trip/gallery/africa/lem_01',
        'https://authorityremedies.com/wp-content/uploads/2016/11/first-mountain-trip.jpg',
        'https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/201409-w-best-countries-for-solo-travelers-finland.jpg?itok=v-cFz9bh',
    ];

    positions = [[33.455882352941174, 7.317073170731708], [22.610294117647058, 28.78048780487805], [22.24264705882353, 56.21951219512195], [22.7328431372549, 80.60975609756098], [47.91666666666667, 17.682926829268293], [50.30637254901961, 30.609756097560975], [56.556372549019606, 46.951219512195124], [48.529411764705884, 62.5609756097561], [65.01225490196077, 41.09756097560975], [77.87990196078432, 25.853658536585368], [77.0220588235294, 49.26829268292683], [84.25245098039215, 75.85365853658537]];

    user: User;
    profile: User;
    posts: Post[] = [];
    journeys: Journey[];
    friends: User[];

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private postService: PostService,
        private journeyService: JourneyService,
        private activatedRoute: ActivatedRoute
    ) {
        console.log('ac ->', activatedRoute);
    }

    get randomJourneyId() {
        if (this.posts.length) {
            return this.posts.random().journey.id;
        }
        return 0;
    }

    async ngOnInit() {
        const userId = Number(this.activatedRoute.snapshot.params.user) || this.authService.userId;
        this.user = await this.authService.user();
        this.profile = await this.userService.find(userId);
        this.posts = await this.postService.userPosts(this.profile);
        this.journeys = await this.journeyService.userJourneys(this.profile);
        // this.friends = await this.userService.userFriends(this.profile);
        this.friends = [];
        console.log('tht ->', this.friends, this.user, this.profile);

        const mapProperties: MapOptions = {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

        this.journeys.forEach(journey => {
            this.drawJourneyPath(journey);
        });

        const bounds = new google.maps.LatLngBounds();
        const checkpoints = this.journeys.flatMap(journey => journey.checkpoints);
        checkpoints.forEach(checkpoint => {
            bounds.extend({lat: checkpoint.latitude, lng: checkpoint.longitude});
        });
        this.map.fitBounds(bounds);

    }

    drawJourneyPath(journey: Journey) {
        const colors = [2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd'];
        const color = Array.from(Array(6)).map(() => colors.random()).join('');

        const path = new google.maps.Polyline({
            path: journey.checkpoints.map(checkpoint => ({lat: checkpoint.latitude, lng: checkpoint.longitude})),
            geodesic: true,
            strokeColor: '#' + color,
            strokeOpacity: 0.7,
            strokeWeight: 6
        });
        path.setMap(this.map);

        journey.checkpoints.forEach(checkpoint => {
            new google.maps.Marker({
                position: {lat: checkpoint.latitude, lng: checkpoint.longitude},
                map: this.map,
                title: 'Hello World!'
            });
        });

    }

    sendFriendRequest() {
        this.userService.sendFriendRequest(this.profile);
    }
}

