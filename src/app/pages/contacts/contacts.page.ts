import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.interface';
import { ModalController } from '@ionic/angular';
import { ContactSearchPage } from "./components/contact-search/contact-search.page";
import { AuthenticationService } from 'src/app/services/authentication.service';

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
    private changeDetectionRef: ChangeDetectorRef,
    private modalController: ModalController,
    private auth: AuthenticationService
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
      this.contacts = await this.contactService
        .fetchContactByUserId(this.auth.getDecodeToken().user.user_id)
        .toPromise();
        
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

  async gotoSearch(){
    const searchModal = await this.modalController.create({
      component: ContactSearchPage,
      // componentProps: { value: 123 }
    });
    return await searchModal.present();
  }

}
