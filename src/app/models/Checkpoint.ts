import { Journey } from './Journey';

export class Checkpoint {
    id?: number;
    latitude: number;
    longitude: number;
    journey?: Journey;
}
