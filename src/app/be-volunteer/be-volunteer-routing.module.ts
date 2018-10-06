import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeVolunteerComponent } from './be-volunteer.component';

const routes: Routes = [
    { path: '', component: BeVolunteerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeVolunteerRoutingModule { }
