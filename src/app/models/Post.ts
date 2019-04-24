import { Comment } from './Comment';
import { User } from './User';
import { Journey } from './Journey';
import { Photo } from './Photo';
import { Location } from './Location';
import { Checkpoint } from './Checkpoint';
import { Like } from './Like';

export class Post {
    id: number;
    user: User;
    journey: Journey;
    description: string;
    location?: Location;
    checkpoint?: Checkpoint;
    likes: Like[] = [];
    comments?: Comment[] = [];
    photos?: Photo[] = [];
    tags?: User[] = [];
    status?: string;
    createdAt = new Date();
    updatedAt = new Date();

}
