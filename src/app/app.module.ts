import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { SuperModule } from './super.module';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { HomeComponent } from './home/home.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityService } from './activity-list/activity.service';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { UserService } from './admin-menu/user.service';
import { UserListComponent } from './admin-menu/user-list/user-list.component';
import { ReportListComponent } from './admin-menu/report-list/report-list.component';
import { ReportDialogComponent } from './admin-menu/report-list/report-dialog/report-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivityFormComponent,
    HomeComponent,
    ActivityListComponent,
    NavComponent,
    LoginComponent,
    ProfileComponent,
    AdminMenuComponent,
    UserListComponent,
    ReportListComponent,
    ReportDialogComponent,
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
    ToastModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [ActivityService, AuthService, UserService],
  entryComponents: [ReportDialogComponent]
})
export class AppModule { }
