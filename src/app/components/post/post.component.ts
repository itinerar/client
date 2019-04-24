import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post/post.service';
import { MatDialog } from '@angular/material';
import { PostViewDialogComponent } from './view/post-view.dialog.component';
import { CommentService } from '../../services/comment/comment.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    @Input() post = new Post();

    commentMessage = '';

    constructor(
        private postService: PostService,
        private commentService: CommentService,
        public dialog: MatDialog) {
    }

    async ngOnInit() {
        this.post.comments = await this.commentService.postComments(this.post);
    }

    async toggleLike() {
        await this.postService.like(this.post);
    }

    async addComment($event: Event) {
        $event.preventDefault();

        const comment = await this.commentService.add(this.post, {
            message: this.commentMessage
        });
        if (!this.post.comments) {
            this.post.comments = [];
        }
        this.post.comments.push(comment);
        this.commentMessage = '';
    }

    openPhotosDialog(post: Post) {
        const dialogRef = this.dialog.open(PostViewDialogComponent, {
            width: '80%',
            height: '90%',
            data: post
        });

        // dialogRef.afterClosed().subscribe(result => {
        //     console.log('The dialog was closed');
        //     this.animal = result;
        // });
    }
}
