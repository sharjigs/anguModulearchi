import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from './core/services/loader/loader.service'
// function log(target, name, descriptor){
//   console.log(target, name, descriptor);

//   const orignal = descriptor.value;

//   orignal()

//   // For getting curent value
//   // descriptor.value = function () { For getting curent value
//   //   console.log("This is hacked by someone")
//   // }

//   return descriptor;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'intro';

  constructor(
    private spinner: NgxSpinnerService,
    private loader: LoaderService  
  ){
  //  this.aSimpleMethod();
  }

  ngOnInit() {
  this.loader.spinnershow();
  }
  // @log
  // aSimpleMethod(){
  //   console.log("Hey There!");
  // }
}
