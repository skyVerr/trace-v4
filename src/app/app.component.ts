import { Component } from '@angular/core';

import { Platform, LoadingController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocketService } from './services/socket.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Contacts',
      url: '/contacts',
      icon: 'contacts'
    },
    {
      title: 'Notifications',
      url: '/notification',
      icon: 'notifications'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loading: LoadingController,
    private navController: NavController,
    private socketService: SocketService,
    private auth: AuthenticationService
  ) {
    this.initializeApp();
    this.socketService.requestId().subscribe(_=>{
      if(this.auth.loggedIn()){
        this.socketService.setId(this.auth.getDecodeToken().user.user_id);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async logout(){
    let loader = await this.loading.create({message:"Logging out...",spinner:'circles'});
    loader.present();
    localStorage.removeItem('token');
    loader.dismiss();
    this.socketService.disconnect();
    this.navController.navigateBack('/login');
  }
}
