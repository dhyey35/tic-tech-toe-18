import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './Footer.component';
import { SharedModule } from '@shared';

@NgModule({
    imports: [
        CommonModule,
        FooterRoutingModule,
        SharedModule,
    ],
    declarations: [FooterComponent]
})
export class FooterModule {}