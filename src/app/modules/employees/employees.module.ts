import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SuperemployeeComponent } from './superemployee/superemployee.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    SuperemployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
