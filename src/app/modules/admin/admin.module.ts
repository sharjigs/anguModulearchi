import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


@NgModule({
  declarations: [AdminprofileComponent, AdminListComponent, AdmindashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
