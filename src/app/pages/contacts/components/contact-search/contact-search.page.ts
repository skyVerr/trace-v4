import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSearchbar } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.page.html',
  styleUrls: ['./contact-search.page.scss'],
})
export class ContactSearchPage implements OnInit {

  @ViewChild('searchBar')searchBar: IonSearchbar;

  usersResult: User[];

  constructor(
    private modalController: ModalController,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.searchBar.setFocus();
  }

  onChange(){

    if(this.searchBar.value.trim() === ''){
      this.usersResult = new Array<User>();
    } else {
      this.userService.searchUser(this.searchBar.value)
        .subscribe(users => {
          this.usersResult = users;
        });
    }

  }

}
