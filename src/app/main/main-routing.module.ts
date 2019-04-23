import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainComponent } from './main.component';
import { AuthGuard } from '../guards/auth/auth.guard';
import { LocationComponent } from './pages/location/location.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { JourneysComponent } from './pages/journeys/journeys.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { FriendsComponent } from './pages/friends/friends.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivateChild: [AuthGuard],
        children: [
            {path: '', component: HomeComponent},
            {path: 'profile', component: ProfileComponent},
            {path: 'location', component: LocationComponent},
            {path: 'friends', component: FriendsComponent},
            {path: 'groups', component: GroupsComponent},
            {path: 'journeys', component: JourneysComponent},
            {path: 'journey/:id', component: JourneyComponent},
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule {
}
