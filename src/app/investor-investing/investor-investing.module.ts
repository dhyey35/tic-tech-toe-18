import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { InvestorInvestingRoutingModule } from './investor-investing-routing.module';
import { InvestorInvestingComponent } from './investor.component';
import { SharedModule } from '@shared';


@NgModule({
    imports: [
        CommonModule,
        InvestorInvestingRoutingModule,
        SharedModule,
        ReactiveFormsModule
                ],
    declarations: [InvestorInvestingComponent]
})
export class InvestorInvestingModule {
   
    constructor(){
    
    }
ngOnInit() {

  

  }
 


}