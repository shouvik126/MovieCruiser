import { Injectable } from '@angular/core';
import { user } from './user';
import { UserService } from './user.service';
import * as jwt_decode from 'jwt-decode';
import { RouterLink } from '@angular/router';


export const AUTHENTICATED_USER = 'authenticateUser';
export const AUTHENTICATED_TOKEN= 'authenticateToken';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loggedIn = false;
  isAdmin = false;
  isCustomer = false;
  user : user;
  redirectUrl = '/movies';
  redirectUrlLogin = '/login';
  //authenticatedUser : user;
  authStatus : string = null;

  res:boolean = false;

  constructor(
    private userService: UserService
  ) { }

  login(username : string, password: string):boolean {
    console.log("inside login")
      this.userService.authenticate(username,password).subscribe(
      (response)=>{
        this.res = true;
        var decoded = jwt_decode(response.jwt);
        console.log(decoded['role'][0]['authority']);
        let role:String = decoded['role'][0]['authority'];
        if(role == 'Admin') {
          this.loggedIn = true;
          //this.authenticatedUser = this.user;
          this.isAdmin = true;
          this.isCustomer = false;
          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(AUTHENTICATED_TOKEN, `Bearer ${response.jwt}`);
          // this.redirectUrl = '/food-item-info';
          console.log("inside admin");
          
          }
        if(role == 'Customer') {
          this.res =  true;
          this.loggedIn = true;
          //this.authenticatedUser = this.user;
          this.isAdmin = false;
          this.isCustomer = true;
          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(AUTHENTICATED_TOKEN, `Bearer ${response.jwt}`);
          // this.redirectUrl = '/menu';
          console.log("inside customer");
          
        }
          

      },
      (error)=>{
        this.res =  false;
      }
    );
    // this.user = this.userService.authenticate(username, password);
    // if(this.user != null && this.user.role == 'admin') {
    //   this.loggedIn = true;
    //   this.authenticatedUser = this.user;
    //   this.isAdmin = true;
    //   this.isCustomer = false;
    //   sessionStorage.setItem(AUTHENTICATED_USER,username);
    //   // this.redirectUrl = '/food-item-info';
    //   return true;
    // }
    // else if(this.user != null && this.user.role == 'customer') {
    //   this.loggedIn = true;
    //   this.authenticatedUser = this.user;
    //   this.isAdmin = false;
    //   this.isCustomer = true;
    //   sessionStorage.setItem(AUTHENTICATED_USER,username);
    //   // this.redirectUrl = '/menu';
    //   return true;
    // }
    // else {
    //   // this.isCustomer = false;
    //   // this.isAdmin = true;
    //   return false;
    // }
    //sub.unsubscribe();
    console.log(this.res);
    return this.res;

  }

  logOut() {
    this.redirectUrl = '/';
    this.loggedIn = false;
    this.isCustomer = false;
    this.isAdmin = false;
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(AUTHENTICATED_TOKEN);
    
  }

  isUserAdmin()
 {
   return  this.isAdmin;
 }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user===null);
  }

  getAuthenticatedUser()
  {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }
  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(AUTHENTICATED_TOKEN);
  }
}
