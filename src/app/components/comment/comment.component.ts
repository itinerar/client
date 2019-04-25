import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../models/Comment';
import { CommentService } from '../../services/comment/comment.service';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

    @Input() comment: Comment;

    constructor(private commentService: CommentService) {
    }

    ngOnInit() {
    }

    toggleLike() {
        this.comment.likes++;
        // this.commentService.like(this.comment);
    }
}
