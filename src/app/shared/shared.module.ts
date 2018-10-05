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
} from './components';

import {
    UtilService,
    CommonService,
    UserAuthenticationService,
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
    ],
    exports: [
        HeaderComponent,
        FormsModule,
        PaginationModule,
        ModalModule,
        ValidateDirective,
        ConfirmDialogComponent,
        TelNumberDirective,
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
            ]
        }
    }
}