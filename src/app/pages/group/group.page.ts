import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/models/group.interface';
import { GroupService } from 'src/app/services/group.service';
import { Member } from 'src/app/models/member.interface';
import { ModalController } from '@ionic/angular';
import { MemberAddPage } from './components/member-add/member-add.page';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {

  group: Group;
  members: Member[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private groupService: GroupService,
    private modalController: ModalController
  ) { 
    this.groupService.getGroupById(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(group => {
        this.group = group;
      });
  }
  
  ngOnInit() { 
    this.loadMembers();
  }

  async loadMembers(){
    this.members = await this.groupService
      .fetchMembers(this.activatedRoute.snapshot.paramMap.get('id')).toPromise();
  }

  async gotoAddMember(){
    const modal = await this.modalController.create({
      component: MemberAddPage
    });
    return await modal.present();
  }

}
