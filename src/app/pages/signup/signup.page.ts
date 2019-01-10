import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, MenuController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private auth: AuthenticationService,
    private loading: LoadingController,
    private menu: MenuController,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  async signUp(f:NgForm){
    let errorMessage = this.isFormValid(f);
    let loader = await this.loading.create({message:'Please wait...',spinner: 'circles'});
    await loader.present();
    if(errorMessage === ""){
      try {
        //For submission
        let formData = new FormData();

        Object.keys(f.value).forEach(e =>{
          formData.append(e,f.value[e]);
        });

        let auth = await this.auth.signUp(formData).toPromise();
        await loader.dismiss();

        localStorage.setItem('token',auth['token']);
        this.menu.enable(true);
        this.navController.navigateForward('/home');
       
      } catch (error) {
        loader.dismiss();
        this.showError(error);
      }
    } else {
      this.showError(errorMessage);
    }
  }

  isFormValid(f:NgForm): string{
    let errorMessage = "";
    if(f.form.invalid){
      //Validate Email
      if(f.form.controls.email.errors != null){
        if(f.form.controls.email.errors.required){
          errorMessage += "Email is required\n";
        }
        if(f.form.controls.email.errors.email) {
          errorMessage += "Email format is incorrect\n";
        }
      }
      //Validate Firstname
      if(f.form.controls.firstname.errors != null){
        if(f.form.controls.firstname.errors.required){
          errorMessage += "First Name is required\n";
        }
      }
      //Validate Lastname
      if(f.form.controls.lastname.errors != null){
        if(f.form.controls.lastname.errors.required){
          errorMessage += "Last Name is required\n";
        }
      }
      //Validate Password
      if(f.form.controls.password.errors != null){
        if(f.form.controls.password.errors.required){
          errorMessage += "Password is required\n";
        }
      }
    }
    return errorMessage;
  }

  async showError(message: string){
    const alert = await this.alertController.create({
      header: 'Error',
      message: '<p style="white-space:pre;">'+message+'</p>',
      buttons: ['OK']
    });

    await alert.present();
  }

}
