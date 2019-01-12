import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notification } from 'src/app/models/notification.interface';
import { NotificationType } from 'src/app/models/notificationType.enum';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss']
})
export class NotificationItemComponent implements OnInit {

  @Input()notification: Notification;
  @Output()refresh: EventEmitter<any> = new EventEmitter();
  from_user: User;
  type: string;
  message: string;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService
  ) { }

  async ngOnInit() {
    this.from_user = await this.userService.getUserbyId(this.notification.from_user_id).toPromise();
    this.laodType();
  }
  
  laodType(){
    if(this.notification.notification_type_id = NotificationType.ContactNotification){
      this.type = "Contact Notification";
      this.message = `${this.from_user.firstname} ${this.from_user.lastname} wants to add you`;
    }

  }

  accept(){
    this.notificationService.acceptNotification(this.notification)
      .subscribe( () => {
        this.refresh.emit();
      });
  }

  decline(){
    this.notificationService.declineNotification(this.notification)
      .subscribe( () => {
        this.refresh.emit();
      });
  }

}
