import { Component, OnInit } from '@angular/core';
import { ContactService } from "src/app/core/services/contact/contact.service";
import { LoaderService } from "src/app/core/services/loader/loader.service";
import { Contact } from "src/app/core/models/contact/contact.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contactlist : Contact[]
  constructor(
    private contactService: ContactService,
    private loader : LoaderService
  ) { }

  ngOnInit() {
    this.getAllContatc();
    this.loader.spinnershows();
  }

  getAllContatc(){
    this.contactService.getContact().subscribe(
      (contactdata: Contact[])=>{
        if(contactdata){
        this.contactlist = contactdata;
        this.loader.spinnerhidden();
      }
    })
  }
}
