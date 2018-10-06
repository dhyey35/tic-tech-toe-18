import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'angular-image-slider';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

import {
    PaginationModule,
    ModalModule,
} from 'ngx-bootstrap';

import {
    HeaderComponent,
    ConfirmDialogComponent,
    SelectPosMapComponent,
    FooterComponent,
} from './components';

import {
    UtilService,
    CommonService,
    UserAuthenticationService,
    IPService,
    GalleryService,
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
        SliderModule,
        PerfectScrollbarModule,
    ],
    declarations: [
        HeaderComponent,
        ConfirmDialogComponent,
        SelectPosMapComponent,
        ValidateDirective,
        TelNumberDirective,
        FooterComponent,
    ],
    exports: [
        HeaderComponent,
        FormsModule,
        PaginationModule,
        ModalModule,
        ValidateDirective,
        ConfirmDialogComponent,
        TelNumberDirective,
        SelectPosMapComponent,
        FooterComponent,
        SliderModule,
        PerfectScrollbarModule,
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
                IPService,
                GalleryService,
                {
                    provide: PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        }
    }
}