import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { ContactService } from 'src/app/services/contact.service';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastController } from '@ionic/angular';
import { Notification } from 'src/app/models/notification.interface';
import { NotificationType } from 'src/app/models/notificationType.enum';

@Component({
  selector: 'app-contact-search-item',
  templateUrl: './contact-search-item.component.html',
  styleUrls: ['./contact-search-item.component.scss']
})
export class ContactSearchItemComponent implements OnInit {

  @Input()user: User;
  
  constructor(
    private contactService: ContactService,
    private notificationService: NotificationService,
    private auth: AuthenticationService,
    private toastController: ToastController
  ) { }

  ngOnInit() { }

  async addContact(){
    if(this.user.user_id == this.auth.getDecodeToken().user.user_id){
      //Check if trying to add self
      const errorToast = await this.toastController.create({
        message: "You can't add yourself",
        duration: 2000
      });
      errorToast.present();
    } else {
      //Check if already in contact
      let friend = await this.contactService.fetchContactByFriendId(this.user.user_id).toPromise();
      if(friend !== null){
        const errorToast = await this.toastController.create({
          message: "Already in your contacts",
          duration: 2000
        });
        errorToast.present();
      } else {
        let from_user_id = this.auth.getDecodeToken().user.user_id;
        let user_id = this.user.user_id;
        let contactRequest = await this.notificationService
          .searchNotification({from_user_id,user_id}).toPromise();
        console.log(contactRequest);
        if(contactRequest.length > 0){
          const errorToast = await this.toastController.create({
            message: "Already sent contact request",
            duration: 2000
          });
          errorToast.present();
        } else { 
          //Send contact notification to selected user
          let postNotification: Notification = {
            from_user_id: this.auth.getDecodeToken().user.user_id,
            user_id: this.user.user_id,
            notification_type_id: NotificationType.ContactNotification
          } 
          await this.notificationService.postNotification(postNotification).toPromise();
          const errorToast = await this.toastController.create({
            message: "Contact request sent!",
            duration: 2000
          });
          errorToast.present();
        }
      }
    }
  }
}


