import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { User } from '../../../models/User';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
    private user: User;
    friendshipRequests: User[];

    constructor(private authService: AuthService, private userService: UserService) {
    }

    async ngOnInit() {
        this.user = await this.authService.user();
        this.user.friends = await this.userService.friends();
        this.friendshipRequests = await this.userService.friendshipRequests();
    }

    async acceptRequest(user: User) {
        await this.userService.acceptRequest(user);
        this.friendshipRequests.remove(user);
    }

    async unfriend(friend: User) {
        await this.userService.unfriend(friend);
        this.user.friends.remove(friend);
    }
}
