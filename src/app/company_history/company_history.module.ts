import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CompanyHistoryRoutingModule } from './company_history-routing.module';
import { CompanyHistory } from './company_history.component';
import { SharedModule } from '@shared';
import { FormGroup, FormControl,FormBuilder,FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CompanyHistory
                ],
    declarations: [CompanyHistory]
})
export class CompanyHistoruModule {
   
    constructor(){

    }
ngOnInit() {

    
  }
  


}