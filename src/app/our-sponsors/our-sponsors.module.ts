import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { OurSponsorsRoutingModule } from './our-sponsors-routing.module';
import { OurSponsorsComponent } from './our-sponsors.component';
import { SharedModule } from '@shared';

@NgModule({
    imports: [
        CommonModule,
        OurSponsorsRoutingModule,
        SharedModule,
    ],
    declarations: [OurSponsorsComponent]
})
export class OurSponsorsModule {}