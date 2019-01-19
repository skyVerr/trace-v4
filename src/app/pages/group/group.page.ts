import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/models/group.interface';
import { GroupService } from 'src/app/services/group.service';
import { Member } from 'src/app/models/member.interface';

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
    private groupService: GroupService
  ) { 
    this.groupService.getGroupById(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(group => {
        this.group = group;
      });
  }
  
  ngOnInit() { 

  }

  async loadMembers(){
    this.members = await this.groupService.fetchMembers(this.group.group_id).toPromise();
  }

}
