import { User } from './User';
import { Post } from './Post';
import { Checkpoint } from './Checkpoint';

export class Journey {
    id: number;
    user?: User;
    name: string;
    description?: string;
    checkpoints?: Checkpoint[] = [];
    posts?: Post[] = [];
    likes ? = Math.randomInt(50, 1500);
    date?: Date = new Date;
    parent?: Journey = null;

    constructor() {
    }

    images() {
        return this.posts.flatMap(post => post.photos.pluck('path'));
    }

}
