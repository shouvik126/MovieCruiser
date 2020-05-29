import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string ="";
  password : string = "";
  authStatus : string = null;
  authenticated: boolean = false;
  invalidUser = false;
  invalidUserMsg : string;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.authStatus = this.authService.authStatus;
  }

  onSubmit(loginForm:NgForm)
  {
    console.log(loginForm);
    this.username = loginForm.value.username;
    this.password = loginForm.value.password;
    this.authenticated = this.authService.login(this.username,this.password);
    if(this.authenticated)
    {
      this.router.navigate([this.authService.redirectUrl]);
    }
    else{
      this.invalidUser = true;
      this.invalidUserMsg = "Invalid Username and Password";
    }
  }
}

