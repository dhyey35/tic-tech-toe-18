import { NgModule, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';
import { InvestorInvestingComponent } from './investor-investing/investor.component';
import { BeVolunteerComponent } from './be-volunteer/be-volunteer.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        InvestorInvestingComponent,
        BeVolunteerComponent,
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
