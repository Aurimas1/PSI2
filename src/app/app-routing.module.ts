import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { UserListComponent } from './admin-menu/user-list/user-list.component';
import { ReportListComponent } from './admin-menu/report-list/report-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'add-activity',
    component: ActivityFormComponent
  },
  {
    path: 'activity-list',
    component: ActivityListComponent
  },
  {
    path: 'admin-menu',
    component: AdminMenuComponent
  },
  {
    path: 'admin-menu/user-list',
    component: UserListComponent
  },
  {
    path: 'admin-menu/report-list',
    component: ReportListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
