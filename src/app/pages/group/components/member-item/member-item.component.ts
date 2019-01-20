import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.scss']
})
export class MemberItemComponent implements OnInit {

  @Input() userId: number;
  user: User;

  constructor(
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.user = await this.userService.getUserbyId(this.userId).toPromise();
  }

}
