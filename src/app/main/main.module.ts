import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../shared/material.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PostComponent } from '../components/post/post.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationComponent } from './pages/location/location.component';
import { ItinerarComponent } from '../components/location/itinerar/itinerar.component';
import { CommentComponent } from '../components/comment/comment.component';
import { JourneyComponent as ProfileJourneyComponent } from '../components/profile/journey/journey.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { JourneysComponent } from './pages/journeys/journeys.component';
import { SharedModule } from '../shared/shared.module';
import { GroupsComponent } from './pages/groups/groups.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { PostViewDialogComponent } from '../components/post/view/post-view.dialog.component';
import { FriendComponent } from '../components/friend/friend.component';
import { GroupComponent } from '../components/group/group.component';
import { NewJourneyComponent } from './pages/journey/new/new-journey.component';
import { PostCheckpointComponent } from './pages/home/post-checkpoint/post-checkpoint.component';

@NgModule({
    declarations: [
        MainComponent,
        HomeComponent,
        ProfileComponent,
        SettingsComponent,
        PostComponent,
        LocationsComponent,
        LocationComponent,
        JourneyComponent,
        ProfileJourneyComponent,
        FriendComponent,
        GroupComponent,
        ItinerarComponent,
        CommentComponent,
        JourneysComponent,
        GroupsComponent,
        FriendsComponent,
        PostViewDialogComponent,
        NewJourneyComponent,
        PostCheckpointComponent,
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        MaterialModule,
        SharedModule,
    ],
    entryComponents: [
        PostViewDialogComponent,
        NewJourneyComponent,
        PostCheckpointComponent
    ]
})
export class MainModule {
}
