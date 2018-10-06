import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
    PaginationModule,
    ModalModule,
} from 'ngx-bootstrap';


import {
    HeaderComponent,
    ConfirmDialogComponent,
    LoginSignupComponent,
    SignupComponent
    
} from './components';
import {
    UtilService,
    CommonService,
    UserAuthenticationService,
    UserService
} from './services';

import {
    AuthGuard,
    GuestGuard,
} from './guard';

import {
    ValidateDirective,
    TelNumberDirective,
} from './directives';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HttpModule,
        FormsModule,
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
    ],
    declarations: [
        HeaderComponent,
        ConfirmDialogComponent,
        ValidateDirective,
        TelNumberDirective,
        LoginSignupComponent,
        SignupComponent
    ],
    exports: [
        HeaderComponent,
        FormsModule,
        PaginationModule,
        ModalModule,
        ValidateDirective,
        ConfirmDialogComponent,
        TelNumberDirective,
        LoginSignupComponent,
        SignupComponent
    ],
})
export class SharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AuthGuard,
                GuestGuard,
                CommonService,
                UtilService,
                UserAuthenticationService,
                UserService
            ]
        }
    }
}