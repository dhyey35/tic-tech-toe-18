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
    LoginSignupComponent,
    SignupComponent,
    SelectPosMapComponent,
    FooterComponent,
    NearbyMapComponent,
    SelectPinMapComponent,
} from './components';
import {
    UtilService,
    CommonService,
    UserAuthenticationService,
    UserService,
    IPService,
    GalleryService,
    VolunteerService,
    InvestorService,
    CompanyService,
    LabsService,
} from './services';

import {
    AuthGuard,
    GuestGuard,
} from './guard';

import {
    ValidateDirective,
    TelNumberDirective,
} from './directives';
import { AccordionModule } from 'primeng/accordion';


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
        AccordionModule
    ],
    declarations: [
        HeaderComponent,
        ConfirmDialogComponent,
        SelectPosMapComponent,
        ValidateDirective,
        TelNumberDirective,
        LoginSignupComponent,
        SignupComponent,
        FooterComponent,
        NearbyMapComponent,
        SelectPinMapComponent,
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
        SignupComponent,
        SelectPosMapComponent,
        FooterComponent,
        SliderModule,
        PerfectScrollbarModule,
        NearbyMapComponent,
        AccordionModule,
        SelectPinMapComponent,
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
                UserService,
                IPService,
                GalleryService,
                VolunteerService,
                InvestorService,
                CompanyService,
                LabsService,
                {
                    provide: PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        }
    }
}