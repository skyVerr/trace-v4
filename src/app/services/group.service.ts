import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../models/api.class';
import { Group } from '../models/group.interface';
import { Observable } from 'rxjs';
import { Member } from '../models/member.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private apiUrl = Api.URL+'groups';

  constructor(
    private http: HttpClient
  ) { }

  createGroup(group: Group):Observable<Group>{
    return this.http.post<Group>(this.apiUrl,group);
  }

  getGroupsByUserId(user_id):Observable<Group[]>{
    return this.http.get<Group[]>(`${Api.URL}user/${user_id}/groups`);
  }

  getGroupById(group_id):Observable<Group>{
    return this.http.get<Group>(this.apiUrl+'/'+group_id);
  }

  fetchMembers(group_id):Observable<Member[]>{
    return this.http.get<Member[]>(this.apiUrl+'/'+group_id+'/members');
  }

}
