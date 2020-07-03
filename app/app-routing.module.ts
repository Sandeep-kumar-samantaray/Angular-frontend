import {NewuserComponent} from './newuser/newuser.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPasswordComponent } from './new-password/new-password.component';


const routes: Routes = [
  { path : '' , component :LoginComponent },
  { path:'dashboard'  , component :DashboardComponent},
  { path:'newuser' , component: NewuserComponent} ,
  { path: 'passwordchange' , component: NewPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
