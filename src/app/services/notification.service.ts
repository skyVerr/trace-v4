import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Api } from '../models/api.class';
import { Notification } from '../models/notification.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl = Api.URL+'notification/';

  constructor(private http: HttpClient) { }

  postNotification(notification: Notification){
    return this.http.post(this.apiUrl,notification);
  }

  searchNotification(notification: Notification):Observable<Notification[]>{
    let params = new HttpParams();
    Object.keys(notification)
      .forEach(key=>{
        params = params.append(key,notification[key]);
      });
    return this.http.get<Notification[]>(this.apiUrl+'search',{params});
  }

  fetchNotifications():Observable<Notification[]>{
    return this.http.get<Notification[]>(this.apiUrl);
  }

  acceptNotification(notification: Notification){
    return this.http.post(this.apiUrl+'confirm',notification);
  }

  declineNotification(notification: Notification){
    return this.http.post(this.apiUrl+'decline',notification);
  }
}
