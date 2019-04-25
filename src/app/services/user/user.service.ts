import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { BaseService } from '../BaseService';
import { ServiceModel } from '../ServiceModel';
import { users } from '../data';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
@ServiceModel(User)
export class UserService extends BaseService<User> {

    constructor(http: HttpClient) {
        super(http);
    }

    get data() {
        return users;
    }

    find(userId: string | number) {
        return super.find(`user/${userId}`);
    }

    user() {
        return super.find(`user`);
    }

    login(email: string, password: string): Promise<User> {
        // return super.post(`login`, {email, password});
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        return this.http.post(this.baseUrl + 'login', formData).toPromise() as Promise<User>;
    }

    friends(): Promise<User[]> {
        return this.get('userFriends');
    }

    userFriends(user: User): Promise<User[]> {
        return this.get(`user/${user.id}/friends`);
    }

    sendFriendRequest(profile: User) {
        return this.post(`requestFriendship/${profile.id}`);
    }

    friendshipRequests() {
        return this.get('userReceivedRequest');
    }

    acceptRequest(user: User) {
        return this.post(`acceptFriendShip/${user.id}`);
    }

    unfriend(user: User) {
        return this.delete(`removeFriendShip/${user.id}`);
    }

}
