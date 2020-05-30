import { Injectable } from '@angular/core';
import { user } from './user';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authenticationApiUrl = 'http://localhost:8083/authentication-service/authenticate';

  // userList : user[] = [{
  //   username : 'admin',
  //   firstname  :  'admin',
  //   lastname : 'account',
  //   password : 'admin',
  //   role : 'admin'
  // },
  // {
  //   username : 'abc',
  //   firstname  :  'abc',
  //   lastname : 'def',
  //   password : 'abc',
  //   role : 'customer'
  // }];

  constructor(
    private http: HttpClient
  ) { }
  
  addUser(user: user) {
    return this.http.post('http://localhost:8083/authentication-service/users',user);
    // this.userList.push(user);
    // console.log(this.userList);

  }

  //  getUser() : user[] {
  //   return this.userList;
  // }

  authenticate (username : string , password:string) {
    // for(let authUser of this.userList) {
    //   if(username == authUser.username && password == authUser.password) {
    //     return authUser;
    //   }
    // }
    // return null;

    
    return this.http.post<any>(
      this.authenticationApiUrl,{
        "username":username,
        "password":password}
      // }).pipe(
      //   map(
      //     data => {
      //       sessionStorage.setItem(AUTHENTICATED_USER, username);
      //       sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
      //       return data;
      //     }
      //   )
      );
  }

}
