import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { User } from '../../../models/User';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
    private user: User;

    constructor(private authService: AuthService) {
    }

    async ngOnInit() {
        this.user = await this.authService.user();
    }

}
