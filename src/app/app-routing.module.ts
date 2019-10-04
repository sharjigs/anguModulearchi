import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { EmployeesModule } from './modules/employees/employees.module';
// import { DepartmentModule } from './modules/department/department.module';
// import { CustomerModule } from './modules/customer/customer.module';
// import { AdminModule } from './modules/admin/admin.module';
// import { ContactModule } from './modules/contact/contact.module';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
