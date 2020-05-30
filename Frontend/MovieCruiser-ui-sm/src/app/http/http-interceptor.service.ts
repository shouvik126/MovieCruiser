import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../site/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(
    private authService : AuthService
  ) { }
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    let authHeaderString = this.authService.getAuthenticatedToken();
    let username = this.authService.getAuthenticatedUser()

    
    if(authHeaderString && username) { 
      req = req.clone({
        setHeaders : {
            Authorization : authHeaderString
          }
        }) 
    }
    return next.handle(req);
  }
}
