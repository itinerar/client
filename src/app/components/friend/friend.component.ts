import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/User';

@Component({
    selector: 'app-friend',
    templateUrl: './friend.component.html',
    styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

    @Input() friend: User;
    @Output() remove = new EventEmitter<User>();

    constructor() {
    }

    ngOnInit() {
    }

}
