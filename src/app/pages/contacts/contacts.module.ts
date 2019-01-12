import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactsPage } from './contacts.page';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactSearchPage } from './components/contact-search/contact-search.page';
import { ContactSearchItemComponent } from './components/contact-search-item/contact-search-item.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsPage
  }
];

@NgModule({
  entryComponents: [ContactSearchPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactsPage, ContactItemComponent, ContactSearchPage, ContactSearchItemComponent]
})
export class ContactsPageModule {}
