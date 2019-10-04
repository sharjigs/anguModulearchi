import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.scss']
})
export class AdminprofileComponent implements OnInit {

  adminprofileForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    designation : new FormControl(''),
    contact : new FormControl(''),
    address : new FormControl(''),
  })
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.adminprofileForm.value);
  }

}
