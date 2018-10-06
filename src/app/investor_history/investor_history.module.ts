import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { InvestorHistoryRoutingModule } from './investor_history-routing.module';
import { InvestorHistory } from './investor_history.component';
import { SharedModule } from '@shared';
import { FormGroup, FormControl,FormBuilder,FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        InvestorHistory
                ],
    declarations: [InvestorHistory]
})
export class InvestorHistoruModule {
   
    constructor(){

    }
ngOnInit() {

    
  }
  


}