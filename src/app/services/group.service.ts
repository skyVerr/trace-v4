import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../models/api.class';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private apiUrl = Api.URL+'groups';

  constructor(
    private http: HttpClient
  ) { }

}
