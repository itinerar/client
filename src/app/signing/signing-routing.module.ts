import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SigningComponent } from './signing.component';
import { AuthGuard } from '../guards/auth/auth.guard';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    {
        path: '',
        component: SigningComponent,
        canActivateChild: [AuthGuard],
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SigningRoutingModule {
}
