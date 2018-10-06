import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolunteerHistory } from './volunteer_history.component';

const routes: Routes = [
    { path: '', component: VolunteerHistory }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerHistoryRoutingModule { }
