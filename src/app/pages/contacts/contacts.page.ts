import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.interface';
import { ModalController } from '@ionic/angular';
import { ContactSearchPage } from "./components/contact-search/contact-search.page";

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
    private modalController: ModalController
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

  async gotoSearch(){
    const searchModal = await this.modalController.create({
      component: ContactSearchPage,
      // componentProps: { value: 123 }
    });
    return await searchModal.present();
  }

}
