import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactSearchPage } from './contact-search.page';
import { ContactSearchItemComponent } from '../contact-search-item/contact-search-item.component';

const routes: Routes = [
  {
    path: '',
    component: ContactSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactSearchPage,ContactSearchItemComponent]
})
export class ContactSearchPageModule {}
