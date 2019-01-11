import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../models/api.class';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl:string = Api.URL+"contacts/";

  constructor(
    private http: HttpClient
  ) { }

  fetchContact():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl);
  }

  deleteContact(contact: Contact){
    return this.http.request('delete',this.apiUrl,{body: contact});
  }
}
