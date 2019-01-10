import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private navController: NavController,
    private auth: AuthenticationService
  ){}

  canActivate():boolean{
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.navController.navigateBack('/login');
    }
  }
}
