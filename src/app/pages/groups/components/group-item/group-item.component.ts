import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/app/models/group.interface';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss']
})
export class GroupItemComponent implements OnInit {

  @Input() groupId;
  group: Group

  constructor(
    private groupService: GroupService,
    private navCtrl: NavController
  ) { }
  
  ngOnInit() {
    this.groupService.getGroupById(this.groupId)
      .subscribe(group => {
        this.group = group;
      });
  }

  gotoGroup(){
    this.navCtrl.navigateForward("groups/"+this.groupId);
  }

}
