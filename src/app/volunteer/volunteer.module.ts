import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgMarqueeModule } from 'ng-marquee';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { VolunteerRoutingModule } from './volunteer-routing.module';
import { VolunteerComponent } from './volunteer.component';
import { SharedModule } from '@shared';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        VolunteerRoutingModule,
        NgMarqueeModule,
        PerfectScrollbarModule
    ],
    declarations: [VolunteerComponent]
})
export class VolunteerModule {}
