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
  constructor(
    private authService:AuthService, 
    private router:Router ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.loggedIn;
    this.isCustomer = this.authService.isCustomer;
  }
  ngDoCheck()
  {
    this.isAuthenticated = this.authService.loggedIn;
    this.isCustomer = this.authService.isCustomer;
  }
  logOut()
  {
    this.authService.logOut();
    this.router.navigate([this.authService.redirectUrl]);
  }

}
