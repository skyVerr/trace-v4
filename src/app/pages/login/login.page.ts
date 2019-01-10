import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertController, NavController, MenuController, LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private alertController: AlertController,
    private navController: NavController,
    private menu: MenuController,
    private socketService: SocketService,
    private loading: LoadingController
    ) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  async onSubmit(f:NgForm){
    let loader = await this.loading.create({message: 'Logging in...',spinner: 'circles'});
    await loader.present();
    try {

      let res = await this.auth.login(f.value).toPromise();
      f.resetForm();
      loader.dismiss();
      localStorage.setItem('token',res['token']);
      this.menu.enable(true);
      this.socketService.setId(this.auth.getDecodeToken().user.user_id);
      // this.socketService.socket.emit('setId',this.auth.getDecodeToken().user.user_id);
      this.navController.navigateForward('/home');
    } catch (error) {
      console.log(error);
      loader.dismiss();
      this.presentAlert();
      f.reset();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Error',
      message: 'Invalid username/password',
      buttons: ['OK']
    });

    await alert.present();
  }

}
