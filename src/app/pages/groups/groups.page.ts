import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GroupAddPage } from './components/group-add/group-add.page';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async gotoCreateGroupPage(){
    const addGroupModal = await this.modalController.create({
      component: GroupAddPage
    });
    return await addGroupModal.present();
  }

}
