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

  login(username : string, password: string,response:any):boolean {
    console.log("inside login")
      // this.userService.authenticate(username,password).subscribe(
      // (response)=>{
        this.res = true;
        var decoded = jwt_decode(response.jwt);
        console.log(decoded)
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
          

    //   },
    //   (error)=>{
    //     this.res =  false;
    //   }
    // );
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
   let user = sessionStorage.getItem(AUTHENTICATED_USER);
   let token:String = sessionStorage.getItem(AUTHENTICATED_TOKEN);
   if(user && token)
   {
    let onlyToken:string = token.substring(7);
    let de = jwt_decode(onlyToken);
    let role=de['role'][0]['authority'];
    if(user && token && role=="Admin")
     this.isAdmin = true;
   }
   
   return  this.isAdmin;
 }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    let token:String = sessionStorage.getItem(AUTHENTICATED_TOKEN);
    if(token && user)
    {
      let onlyToken:string = token.substring(7);
      let de = jwt_decode(onlyToken);
      let role=de['role'][0]['authority'];
      if(role == "Customer")
       this.isCustomer = true;
      
    }
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
