import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck{

  isAuthenticated: boolean = false;
  isCustomer: boolean = false;
  user:String=''
  constructor(
    private authService:AuthService, 
    private router:Router ) { }

  ngOnInit(): void {
    this.user = this.authService.getAuthenticatedUser();
    this.isAuthenticated = this.authService.isUserLoggedIn();
    this.isCustomer = this.authService.isCustomer;
  }
  ngDoCheck()
  {
    this.user = this.authService.getAuthenticatedUser();
    this.isAuthenticated = this.authService.isUserLoggedIn();
    this.isCustomer = this.authService.isCustomer;
  }
  logOut()
  {
    this.authService.logOut();
    this.onClick();
    this.router.navigate([this.authService.redirectUrl]);
  }

  onClick() {
    this.authService.newEvent('clicked!');
  }

}
