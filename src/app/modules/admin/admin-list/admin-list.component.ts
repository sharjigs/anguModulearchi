import { Component, OnInit } from '@angular/core';
import { AdminService } from "src/app/core/services/admin/admin.service";
import { Admin } from "src/app/core/models/admin/admin.model";
import { LoaderService } from 'src/app/core/services/loader/loader.service'

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  allAdmin: Admin[];
  constructor(
    private adminService: AdminService,
    private loader : LoaderService
  ) { }

  ngOnInit() {
    this.getAllAdmins();
    this.loader.spinnershows();
  }

  getAllAdmins(){
    return this.adminService.getAdmin().subscribe(
      (admindata: Admin[]) => {
        if(admindata){
          this.allAdmin = admindata;
          this.loader.spinnerhidden();
        }
      });
  }
}
