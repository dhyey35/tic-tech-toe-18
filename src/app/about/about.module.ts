import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '@shared';

@NgModule({
    imports: [
        CommonModule,
        AboutRoutingModule,
        SharedModule,
    ],
    declarations: [AboutComponent]
})
export class AboutModule {}