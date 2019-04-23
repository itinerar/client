import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';
import { SigningModule } from './signing/signing.module';

const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    // {
    //     path: 'login', component: LoginLayoutComponent,
    //     children: [
    //         {path: '', component: LoginComponent}
    //     ]
    // },
    // {
    //     path: '',
    //     // canActivate: [AuthGuardService],
    //     loadChildren: './main/main.module#MainModule'
    // },
    // {
    //     path: '',
    //     loadChildren: './signing/signing.module#SigningModule'
    // },
    //
    // { path: 'main', component: HomeLayoutComponent,
    //     children: [
    //         { path: '', redirectTo: 'first', pathMatch: 'full' },
    //         { path: 'first', component: FirstComponent },
    //         { path: 'second', component: SecondComponent }
    //     ]
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        MainModule,
        SigningModule,
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
