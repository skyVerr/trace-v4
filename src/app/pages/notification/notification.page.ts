import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Notification } from 'src/app/models/notification.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notifications: Notification[];

  constructor(
    private notificationService: NotificationService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadNotification();
  }

  loadNotification(){
    this.notificationService.fetchNotifications()
      .subscribe(notifications => {
        this.notifications = notifications;
        this.changeDetectorRef.detectChanges();
      });
  }

}
