import {User} from './User';

export class Group {
    id: number;
    name: string;
    owner: User;
    about: string;
    picture: string;
    members: number;
}
