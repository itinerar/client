import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { MatDialog } from '@angular/material';
import { NewJourneyComponent } from './pages/journey/new/new-journey.component';
import { JourneyService } from '../services/journey/journey.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    private user: User;
    //
    // images = [
    //     'https://authorityremedies.com/wp-content/uploads/2016/11/first-mountain-trip.jpg',
    //     'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/2635/SITours/dolomite-mountains-and-cortina-small-group-day-trip-from-venice-in-venice-42464.jpg',
    //     'https://www.rei.com/adventures/assets/adventures/images/trip/core/europe/etm_hero',
    //     'https://www.rei.com/adventures/assets/adventures/images/trip/gallery/africa/lem_01',
    //     'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3142/SITours/pyrenees-mountains-small-group-day-trip-from-barcelona-in-barcelona-115256.jpg',
    //     'https://www.telegraph.co.uk/content/dam/Travel/2018/August/mountains-hallstatt.jpg?imwidth=450',
    //     'https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/201409-w-best-countries-for-solo-travelers-finland.jpg?itok=v-cFz9bh',
    //     'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/2635/SITours/dolomite-mountains-and-cortina-small-group-day-trip-from-venice-in-venice-42464.jpg',
    //     'https://www.rei.com/adventures/assets/adventures/images/trip/gallery/africa/lem_01',
    //     'https://authorityremedies.com/wp-content/uploads/2016/11/first-mountain-trip.jpg',
    // ];
    //
    // positions = [[90, 86], [160, 146], [171, 260], [371, 188], [419, 308], [492, 76], [649, 93], [544, 169], [656, 193], [679, 314]];

    constructor(private authService: AuthService,
                private journeyService: JourneyService,
                private router: Router,
                public dialog: MatDialog) {
    }

    async ngOnInit() {
        this.user = await this.authService.user();
    }

    async logout() {
        await this.authService.logout();
        await this.router.navigate(['login']);
    }

    startJourney() {
        const dialogRef = this.dialog.open(NewJourneyComponent, {
            width: '400px'
        });

        dialogRef.afterClosed().subscribe(async(result) => {
            console.log('wpw ->', result);
            const journey = await this.journeyService.save(result);
            this.router.navigate(['/journey', journey.id]);
        });
    }
}
