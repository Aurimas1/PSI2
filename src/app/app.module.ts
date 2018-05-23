import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { SuperModule } from './super.module';
import { HomeComponent } from './home/home.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityService } from './activity-list/activity.service';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { ReportListComponent } from './admin-menu/report-list/report-list.component';
import { ReportDialogComponent } from './admin-menu/report-list/report-dialog/report-dialog.component';
import { SurveyComponent } from './survey/survey.component';

import { ChartsModule } from 'ng2-charts';
import { AddActivityDialogComponent } from './nav/add-activity-dialog/add-activity-dialog.component';
import { CreateDiscountComponent } from './create-discount/create-discount.component';
import { DiscountDetailComponent } from './discount-detail/discount-detail.component';
import { AdBuyComponent } from './ad-buy/ad-buy.component';
import { ReportListService } from './admin-menu/report-list/report-list.service';
import { RegisterComponent } from './register/register.component';
import { SurveyService } from './survey/survey.service';
import { StatsService } from './nav/stats.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityListComponent,
    NavComponent,
    LoginComponent,
    ProfileComponent,
    AdminMenuComponent,
    ReportListComponent,
    ReportDialogComponent,
    SurveyComponent,
    AddActivityDialogComponent,
    CreateDiscountComponent,
    DiscountDetailComponent,
    AdBuyComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    SuperModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    ChartsModule,
    AngularFireStorageModule
  ],
  bootstrap: [AppComponent],
  providers: [ActivityService, AuthService, ReportListService, SurveyService, StatsService],
  entryComponents: [ReportDialogComponent, AddActivityDialogComponent]
})
export class AppModule { }
