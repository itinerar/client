import { Injectable } from '@angular/core';
import { Comment } from '../../models/Comment';
import { comments } from '../data';
import { BaseService } from '../BaseService';
import { Post } from '../../models/Post';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CommentService extends BaseService<Comment> {

    constructor(http: HttpClient) {
        super(http);
    }

    get data() {
        return comments;
    }

    like(comment: Comment) {
        comment.likes++;
    }

    add(post: Post, data = {}) {
        return this.post(`post/${post.id}/comment`, data);
    }

    postComments(post: Post) {
        return super.get(`post/${post.id}/comments`);
    }
}
