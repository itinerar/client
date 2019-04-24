import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigningComponent } from './signing.component';
import { SigningRoutingModule } from './signing-routing.module';
import { MaterialModule } from '../shared/material.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
    declarations: [
        SigningComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        SigningRoutingModule,
        MaterialModule
    ]
})
export class SigningModule {
}
