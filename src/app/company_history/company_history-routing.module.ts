import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyHistory } from './company_history.component';

const routes: Routes = [
    { path: '', component: CompanyHistory }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyHistoryRoutingModule { }
