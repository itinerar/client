import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(
        private userService: UserService,
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    async login() {
        await this.authService.login(this.email, this.password);
        await this.router.navigate(['/']);
    }
}
