import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  @ViewChild('slidingList') slidingList;
  contacts: Contact[];

  constructor(
    private contactService: ContactService,
    private changeDetectionRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadContacts();
  }

  async doRefresh(event){
    try {
      await this.slidingList.closeSlidingItems();
      await this.loadContacts();
      event.target.complete();
    } catch (error) {
      console.error(error);
    }
  }
  
  async loadContacts(){
    try {
      this.contacts = await this.contactService.fetchContact().toPromise();
      return Promise.resolve();
    } catch (error) {
      console.error(error);
    }
  }

  async onDelete(){
    await this.slidingList.closeSlidingItems();
    await this.loadContacts();
    this.changeDetectionRef.detectChanges();
  }

}
