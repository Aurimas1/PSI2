import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { ReportListComponent } from './admin-menu/report-list/report-list.component';
import { SurveyComponent } from './survey/survey.component';
import { CreateDiscountComponent } from './create-discount/create-discount.component';
import { DiscountDetailComponent } from './discount-detail/discount-detail.component';
import { AdBuyComponent } from './ad-buy/ad-buy.component';
import { RegisterComponent } from './register/register.component';
import { ActivityComponent } from './activity/activity.component';


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
    path: 'activity-list',
    component: ActivityListComponent
  },
  {
    path: 'admin-menu',
    component: AdminMenuComponent
  },
  {
    path: 'admin-menu/report-list',
    component: ReportListComponent
  },
  {
    path: 'survey/:id',
    component: SurveyComponent
  },
  {
    path: 'activity/:id',
    component: ActivityComponent
  },
  {
    path: 'create-discount',
    component: CreateDiscountComponent
  },
  {
    path: 'discount-detail/:id',
    component: DiscountDetailComponent
  },
  {
    path: 'ad-buy',
    component: AdBuyComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
