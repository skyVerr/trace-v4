import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupsPage } from './groups.page';
import { GroupAddPage } from './components/group-add/group-add.page';

const routes: Routes = [
  {
    path: '',
    component: GroupsPage
  }
];

@NgModule({
  entryComponents: [GroupAddPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupsPage, GroupAddPage]
})
export class GroupsPageModule {}
