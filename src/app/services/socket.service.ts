import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Api } from '../models/api.class';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket = io(Api.URL);

  constructor(
    private auth: AuthenticationService
  ) { }

  requestId(){
    let observable = new Observable<any>(observer => {
      this.socket.on('requestId',data=>{
        observer.next(data);
      });
    });
    return observable;
  }
  
  setId(id){
    this.socket.emit('setId',id);
  }

  disconnect(){
    this.socket.disconnect();
  }
}
