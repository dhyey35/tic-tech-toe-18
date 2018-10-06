import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { VolunteerHistoryRoutingModule } from './volunteer_history-routing.module';
import { VolunteerHistory } from './volunteer_history.component';
import { SharedModule } from '@shared';
import { FormGroup, FormControl,FormBuilder,FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        VolunteerHistory,
        SharedModule
                ],
    declarations: [VolunteerHistory]
})
export class BeVolunteerModule {
   
    constructor(){

    }
ngOnInit() {

    
  }
  


}