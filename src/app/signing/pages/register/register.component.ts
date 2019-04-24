import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    email: string;
    password: string;
    repeatPassword: string;

    constructor(
        private userService: UserService,
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    async register() {
        await this.authService.login(this.email, this.password);
        await this.router.navigate(['/']);
    }
}
