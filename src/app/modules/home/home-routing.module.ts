import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'

const dashhome: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(dashhome)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
