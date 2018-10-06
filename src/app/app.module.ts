import { NgModule, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared';
import { ToastrModule } from 'ngx-toastr';
import { InvestorInvestingComponent } from './investor-investing/investor.component';
import { BeVolunteerComponent } from './be-volunteer/be-volunteer.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import { VolunteerHistory } from './volunteer_history/volunteer_history.component';
@NgModule({
    declarations: [
        AppComponent,
        InvestorInvestingComponent,
        BeVolunteerComponent,
        VolunteerHistory
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'my-app' }),
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
        SharedModule.forRoot(),
        ReactiveFormsModule       
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor( @Inject(PLATFORM_ID) private readonly platformId: any) {
    }
}
