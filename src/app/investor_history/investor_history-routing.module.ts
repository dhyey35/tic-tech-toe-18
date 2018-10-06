import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestorHistory } from './investor_history.component';

const routes: Routes = [
    { path: '', component: InvestorHistory }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorHistoryRoutingModule { }
