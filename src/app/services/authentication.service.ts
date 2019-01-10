import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../models/api.class';
import * as jwt from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
    ) { }

  signUp(user){
    return this.http.post(Api.URL+'sign-up',user);
  }

  login(user){
    return this.http.post(Api.URL+'login',user);
  }


  logout():boolean{
    localStorage.removeItem('token');
    return true;
  }

  loggedIn():boolean{
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getDecodeToken(){
    try{
      return jwt(this.getToken());
    }
    catch(Error){
        return null;
    }
  }
}
