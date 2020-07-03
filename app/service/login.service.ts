
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  host: any = "http://localhost:8080/demoWebApp";
  
    constructor(private http: HttpClient) { }
  
    logindata(data):Observable<any> {
      return this.http.post(this.host+"/login" , data);
    }
}
