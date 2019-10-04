import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsComponent } from './contacts/contacts.component';
const routes1: Routes = [
  { path: 'contactlist', component: ContactListComponent },
  { path: 'contacts', component: ContactsComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes1)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
