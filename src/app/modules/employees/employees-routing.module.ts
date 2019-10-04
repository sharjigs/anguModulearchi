import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { SuperemployeeComponent } from './superemployee/superemployee.component';

const routesemp: Routes = [
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'employess', component: EmployeeComponent },
  { path: 'superusers', component: SuperemployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routesemp)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
