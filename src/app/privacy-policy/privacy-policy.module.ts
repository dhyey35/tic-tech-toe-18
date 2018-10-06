import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { SharedModule } from '@shared';

@NgModule({
    imports: [
        CommonModule,
        PrivacyPolicyRoutingModule,
        SharedModule,
    ],
    declarations: [PrivacyPolicyComponent]
})
export class PrivacyPolicyModule {}