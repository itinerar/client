import { Group } from './Group';
import { Journey } from './Journey';
import { Location } from './Location';

export class User {
    id: number;

    name: string;

    email?: string;

    address?: Location;

    friends?: User[] = [];

    groups?: Group[] = [];

    journeys?: Journey[] = [];

    activeJourney?: Journey;

    followers?: User[] = [];

    following?: User[] = [];

    picture?: string;

    constructor(id: number, name: string, email: string = '') {
        this.id = id;
        this.name = name;
        this.email = email;
    }

}
