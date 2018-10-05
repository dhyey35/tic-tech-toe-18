import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '@shared';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedModule,
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
