import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeVolunteerRoutingModule } from './be-volunteer-routing.module';
import { BeVolunteerComponent } from './be-volunteer.component';
import { SharedModule } from '@shared';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        BeVolunteerRoutingModule,
        SharedModule
    ],
    declarations: [BeVolunteerComponent]
})
export class BeVolunteerModule {

    constructor() {

    }
    ngOnInit() {


    }



}