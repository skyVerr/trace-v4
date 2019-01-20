import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.page.html',
  styleUrls: ['./member-add.page.scss'],
})
export class MemberAddPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

}
