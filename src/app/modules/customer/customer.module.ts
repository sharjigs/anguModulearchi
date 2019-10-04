import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersdashboardComponent } from './customersdashboard/customersdashboard.component'

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomersComponent,
    CustomersdashboardComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule

  ]
})
export class CustomerModule { }
