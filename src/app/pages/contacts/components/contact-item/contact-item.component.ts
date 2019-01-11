import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() onDelete: EventEmitter<Contact> = new EventEmitter();
  friend: User;

  constructor(
    private userService: UserService,
    private contactService: ContactService
    ) { }

  ngOnInit() {
    this.loadFriendDetails();
  }

  private async loadFriendDetails(){
    try {
      this.friend = await this.userService.getUserbyId(this.contact.friend_id).toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  delete(){
    this.contactService.deleteContact(this.contact)
      .subscribe(_=>{
        this.onDelete.emit(this.contact);
      },err=>{
        console.error(err);
      });
  }
  
}
