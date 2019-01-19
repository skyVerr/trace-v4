import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule',canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'contacts', loadChildren: './pages/contacts/contacts.module#ContactsPageModule', canActivate: [AuthGuard] },
  { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule', canActivate: [AuthGuard] },
  { path: 'groups', loadChildren: './pages/groups/groups.module#GroupsPageModule', canActivate: [AuthGuard] },
  { path: 'groups/:id', loadChildren: './pages/group/group.module#GroupPageModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
