import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';
import { Api } from '../models/api.class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = Api.URL+'user/';

  constructor(private http: HttpClient) { }

  getUserbyId(id):Observable<User>{
    return this.http.get<User>(this.apiUrl+id);
  }
}
