import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroupService } from 'src/app/services/group.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Group } from 'src/app/models/group.interface';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  groups: Group[];

  constructor(
    private alertController: AlertController,
    private groupService: GroupService,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.loadGroups();
  }

  async loadGroups(){
    this.groups = await this.groupService
      .getGroupsByUserId(this.auth.getDecodeToken().user.user_id).toPromise();
  }

  async doRefresh(event){
    await this.loadGroups();
    event.target.complete();
  }

  async presentCreatePrompt() {
    const alert = await this.alertController.create({
      header: 'Pick a group name!',
      inputs: [
        {
          name: 'groupName',
          type: 'text',
          placeholder: 'Group name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            if(!!!data.groupName.trim()) console.log('empty');
            this.groupService.createGroup({name: data.groupName})
              .subscribe(group => {
                this.loadGroups();
              });
          }
        }
      ]
    });

    await alert.present();
  }

}
