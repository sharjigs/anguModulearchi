import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersdashboardComponent } from './customersdashboard/customersdashboard.component';

const routescu: Routes = [
  { path: 'customerlist', component: CustomerListComponent },
  { path: 'custdash', component: CustomersdashboardComponent },
  { path: 'customerprofiles', component: CustomersComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routescu)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
