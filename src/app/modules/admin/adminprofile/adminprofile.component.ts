import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.scss']
})
export class AdminprofileComponent implements OnInit {

  adminprofileForm = new FormGroup({
    firstName : new FormControl('',Validators.required),
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

    console.log(this.adminprofileForm.controls['firstName'].value);

    console.log(this.adminprofileForm.get('firstName').value);
  }

}
