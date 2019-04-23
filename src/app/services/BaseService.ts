import { HttpClient } from '@angular/common/http';
import { USER_ID } from '../shared/utils';

export abstract class BaseService<T extends {id: number}> {
    protected readonly baseUrl = 'http://localhost:8080/';

    // protected readonly data: T[];

    constructor(protected http: HttpClient) {
    }

    // protected constructor(protected http: HttpClient) {
    // this.data = new Array(1).fill(0).map(() => {
    //     const model = new this.model;
    //     const values = this.getRandomModelValues(model.constructor);
    //
    //     return model;
    // });
    // console.log('data ->', this.data,
    //     this.model,
    //     Reflect.getMetadata('design:type', this.model, 'id'),
    //     Reflect.getMetadata('design:paramtypes', this.model, 'id'),
    //     Reflect.getMetadata('design:returntype', this.model, 'id'),
    // );
    // }

    // get model() {
    //     return Reflect.getMetadata(ModelServiceKey, this);
    // }

    get data(): T[] {
        return [];
    }

    find(uri: string): Promise<T> {
        // return Promise.resolve(this.data.findWhere('id', id));
        return this.http.get(this.baseUrl + uri, this.getHeaders()).toPromise() as Promise<T>;
    }

    get(uri: string): Promise<T[]> {
        // return Promise.resolve(this.data)
        return this.http.get(this.baseUrl + uri, this.getHeaders()).toPromise() as Promise<T[]>;
    }

    post(uri: string, data = {}): Promise<T> {
        // return Promise.resolve(this.data)
        return this.http.post(this.baseUrl + uri, data, this.getHeaders()).toPromise() as Promise<T>;
    }

    delete(uri: string) {
        return this.http.delete(this.baseUrl + uri, this.getHeaders()).toPromise() as Promise<T>;
    }

    // private getRandomValue(type: Function) {
    //     const randomValuesFunctions = {
    //         [Number.name]: () => Math.randomInt(1, 1000),
    //         [String.name]: () => String.random(),
    //     };
    //
    //     const randomFunction = randomValuesFunctions[type.name] || plainToClass(type, this.getRandomModelValues(type));
    //     return randomFunction();
    // }
    //
    // private getRandomModelValues(model: Function) {
    //     const modelMetadata = Reflect.getMetadata('modelmetadata', model);
    //     if (!modelMetadata) {
    //         throw new Error('Model ' + model.name + 'does not have metadata defined');
    //     }
    //     const values: {[key: string]: string} = {};
    //     Object.keys(modelMetadata).forEach(field => {
    //         values[field] = this.getRandomValue(modelMetadata[field]);
    //     });
    //     return values;
    // }
    private getHeaders() {
        return {
            headers: {'x-user-id': localStorage.getItem(USER_ID)}
        };
    }

}
