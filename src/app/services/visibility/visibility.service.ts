import { Injectable } from '@angular/core';
import { BaseService } from '../BaseService';
import { Visibility } from '../../models/Visibility';
import { visibilities } from '../data';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class VisibilityService extends BaseService<Visibility> {

    constructor(http: HttpClient) {
        super(http);
    }

    get data() {
        return visibilities;
    }

    get() {
        return super.get('/statuses');
    }
}
