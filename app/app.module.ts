import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { NewuserComponent } from './newuser/newuser.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginService } from './service/login.service';
import { AppHttpIntercepterService } from './intercepter/app-http-intercepter.service';
import { SecurityQuestionComponent } from './security-question/security-question.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterheaderComponent } from './masterheader/masterheader.component';
import { MasterNavbarComponent } from './master-navbar/master-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewuserComponent,
    LogoutComponent,
    SecurityQuestionComponent,
    NewPasswordComponent,
    DashboardComponent,
    MasterheaderComponent,
    MasterNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, 
      useClass: AppHttpIntercepterService, 
      multi: true },
    LoginService],
  bootstrap: [AppComponent]
}
)

export class AppModule { }
