import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';

const routes: Routes = [
  { path: 'adminlists', component: AdminListComponent },
  { path: '', component: AdmindashboardComponent },
  { path: 'adminprofiles', component: AdminprofileComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
