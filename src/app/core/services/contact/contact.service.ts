import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";

import { Contact } from "src/app/core/models/contact/contact.model";


const headerOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  mockurl = "http://localhost:3200/Contact";

  constructor(private http: HttpClient ) { }

  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.mockurl,headerOption)
  }
}
