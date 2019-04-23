import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth-service/auth.service';
import { SigningComponent } from '../../signing/signing.component';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }

    async canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuthenticated()) {
            await this.authService.login(this.authService.userEmail, '');
            if (childRoute.parent.component === SigningComponent) {
                this.router.navigate(['/']);
            }
            return true;
        }

        if (childRoute.parent.component === SigningComponent) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
