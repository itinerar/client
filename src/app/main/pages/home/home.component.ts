import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post/post.service';
import { Post } from '../../../models/Post';
import { AuthService } from '../../../services/auth-service/auth.service';
import { User } from '../../../models/User';
import { Visibility } from '../../../models/Visibility';
import { VisibilityService } from '../../../services/visibility/visibility.service';
import { JourneyService } from '../../../services/journey/journey.service';
import { coordinates } from '../../../services/data';
import { MatDialog } from '@angular/material';
import { PostCheckpointComponent } from './post-checkpoint/post-checkpoint.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    posts: Post[];
    visibilities: Visibility[] = [];
    user: User;
    post: Post = new Post();
    postImages: File[] = [];
    posting = false;

    constructor(private authService: AuthService,
                private postService: PostService,
                private journeyService: JourneyService,
                private visibilityService: VisibilityService,
                public dialog: MatDialog
    ) {
    }

    async ngOnInit() {
        // const userId = Number(this.activatedRoute.snapshot.params.id);
        this.user = await this.authService.user();
        this.user.journeys = await this.journeyService.get();
        this.posts = await this.postService.feed(this.user);
        this.visibilities = await this.visibilityService.get();
        this.initNewPost();
    }

    showImages($event: Event) {
        const target = $event.target as HTMLInputElement;
        Array.from(target.files).forEach(file => {
            this.postImages.push(file);
            const reader = new FileReader();

            reader.onload = (event: ProgressEvent) => {
                this.post.photos.push({
                    path: String((<FileReader>event.target).result),
                });
            };

            reader.readAsDataURL(file);
        });
    }

    async savePost() {
        this.post.location = {id: 1, name: this.user.activeJourney.name};
        this.post.user = this.user;
        const randomCoord = coordinates[0].random();
        this.post.checkpoint = {latitude: randomCoord.lat, longitude: randomCoord.lng};

        this.posting = true;
        this.post.photos = [];

        const dialogRef = this.dialog.open(PostCheckpointComponent, {
            width: '80%',
            height: '650px'
        });

        dialogRef.afterClosed().subscribe(async(result) => {
            this.post.checkpoint = result;
            const post = await this.postService.save(this.post, this.postImages);
            this.posting = false;
            this.initNewPost();
            this.posts.unshift(post);
        });

    }

    private initNewPost() {
        this.post = new Post();
        this.post.journey = this.user.journeys.findWhere('id', this.user.activeJourney.id);
    }
}
