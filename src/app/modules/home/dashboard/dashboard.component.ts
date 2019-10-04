import { Component, OnInit } from '@angular/core';
import { LoaderService } from "src/app/core/services/loader/loader.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private loader: LoaderService) { }

  ngOnInit() {
    this.loader.spinnershow()
  }

}
