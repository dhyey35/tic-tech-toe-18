import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurSponsorsComponent } from './our-sponsors.component';

const routes: Routes = [
    { path: '', component: OurSponsorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurSponsorsRoutingModule { }
