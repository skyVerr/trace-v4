import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.page.html',
  styleUrls: ['./group-add.page.scss'],
})
export class GroupAddPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

}
