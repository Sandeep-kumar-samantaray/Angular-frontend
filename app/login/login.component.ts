import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  constructor(private loginsev: LoginService , private _route :Router ) {

  }

  ngOnInit(): void {
  }

  submit(): void {
    
    //const serviceCall = this.loginsev.logindata(this.user);
    //serviceCall.subscribe(res =>{
      // if (res.usercode = 1 ){
        this._route.navigate(['dashboard']);
      // }
    //})
    
    
  }

}

class User{
  email :any;
  password :any;
} 
