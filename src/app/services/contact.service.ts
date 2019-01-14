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

  fetchContactByUserId(user_id):Observable<Contact[]>{
    return this.http.get<Contact[]>(`${Api.URL}users/${user_id}/contacts`);
  }

  deleteContact(contact: Contact){
    return this.http.request('delete',this.apiUrl,{body: contact});
  }

  fetchContactByFriendId(friend_id: number):Observable<Contact>{
    return this.http.get<Contact>(this.apiUrl+'?friend_id='+friend_id);
  }
}
