import { HttpHeaders, HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AppHttpIntercepterService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: new HttpHeaders(header)
    });

   // console.log('Intercepted HTTP call');

    return next.handle(authReq);
  }

  constructor() { }
}


const header = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Authorization': 'my-auth-token',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
};