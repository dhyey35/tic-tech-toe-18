import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OurSponsorsRoutingModule } from './our-sponsors-routing.module';
import { OurSponsorsComponent } from './our-sponsors.component';
import { SharedModule } from '@shared';
import {ChartModule} from 'primeng/chart';

@NgModule({
    imports: [
        CommonModule,
        OurSponsorsRoutingModule,
        SharedModule,
        ChartModule
    ],
    declarations: [OurSponsorsComponent]
})
export class OurSponsorsModule {}
