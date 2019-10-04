import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';

import {ContactListComponent} from './contact-list/contact-list.component'
import {ContactsComponent} from './contacts/contacts.component'

@NgModule({
  declarations: [
    ContactListComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
