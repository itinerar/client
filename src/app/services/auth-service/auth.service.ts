import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../user/user.service';
import { USER_EMAIL, USER_ID } from '../../shared/utils';

function Memorize<T>(target: Object, key: string, descriptor: PropertyDescriptor) {
    console.log('arg ->', this, arguments);

    const originalMethod: Function = descriptor.value;

    descriptor.value = function() {
        return originalMethod.apply(this, []);
    };

    return descriptor;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedUser: User;

    constructor(private userService: UserService) {
    }

    get userId(): number {
        return Number(JSON.parse(localStorage.getItem(USER_ID)));
    }

    get userEmail(): string {
        return JSON.parse(localStorage.getItem(USER_EMAIL));
    }

    @Memorize
    user(): User {
        // return this.userService.user();
        return this.loggedUser;
    }

    isAuthenticated(): boolean {
        return !!this.userId;
    }

    async login(email: string, password: string) {
        const user = await this.userService.login(email, password);
        this.loggedUser = user;
        localStorage.setItem(USER_ID, JSON.stringify(user.id));
        localStorage.setItem(USER_EMAIL, JSON.stringify(user.email));
    }

    async logout() {
        localStorage.removeItem(USER_ID);
        localStorage.removeItem(USER_EMAIL);
    }
}
