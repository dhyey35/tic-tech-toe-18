import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestorInvestingComponent } from './investor.component';

const routes: Routes = [
    { path: '', component: InvestorInvestingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorInvestingRoutingModule { }
