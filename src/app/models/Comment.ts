import { User } from './User';
import { Post } from './Post';

export class Comment {
    id: number;
    message: string;
    user?: User;
    post?: Post;
    likes?: number;
    date?: Date;
}
