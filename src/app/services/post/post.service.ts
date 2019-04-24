import { Injectable } from '@angular/core';
import { Post } from '../../models/Post';
import { BaseService } from '../BaseService';
import { posts, visibilities } from '../data';
import { User } from '../../models/User';
import { HttpClient } from '@angular/common/http';
import { Visibility } from '../../models/Visibility';
import { Journey } from '../../models/Journey';

@Injectable({
    providedIn: 'root'
})
export class PostService extends BaseService<Post> {

    constructor(http: HttpClient) {
        super(http);
    }

    get data() {
        return posts;
    }

    feed(user: User): Promise<Post[]> {
        // const friends = user.friends.pluck('id');
        // const userIds = [user.id].concat(friends);
        // const data = this.data.filter(post => userIds.contains(post.journey.user.id));
        // return Promise.resolve(data);
        return this.get('posts');
    }

    // posts(user: User): Promise<Post[]> {
    //     const data = this.data.filter(post => post.journey.user.id === user.id);
    //     return Promise.resolve(data);
    // }

    like(post: Post): Promise<Post> {
        // post.likes.push();
        // return Promise.resolve(post);
        return this.post(`post/${post.id}/like`);
    }

    getVisiblities(): Promise<Visibility[]> {
        return Promise.resolve(visibilities);
    }

    save(post: Post, postImages: File[]): Promise<Post> {
        const formData = new FormData();
        formData.append('post', JSON.stringify(post));
        postImages.forEach(file => {
            formData.append('image', file, file.name);
        });
        return this.post('post', formData);
    }

    userPosts(user: User) {
        return super.get(`user/${user.id}/posts`);
    }

    posts(journey: Journey) {
        return super.get(`journey/${journey.id}/posts`);
    }
}
