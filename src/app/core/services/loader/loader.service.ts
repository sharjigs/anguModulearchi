import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private spinner: NgxSpinnerService) { }

  spinnershow(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  spinnershows(){
    this.spinner.show();
  }

  spinnerhidden(){
      this.spinner.hide();
  }
}
