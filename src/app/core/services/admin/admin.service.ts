import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";
import { Admin } from "src/app/core/models/admin/admin.model";


const headerOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AdminService {


  mockurl = "http://localhost:3000/Admin";
  constructor(
    private http: HttpClient
  ) { }

  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.mockurl, headerOptions);
  }
}
 