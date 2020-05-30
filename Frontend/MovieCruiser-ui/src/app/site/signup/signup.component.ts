import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { user } from '../user';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  user: user={
    userName : "",
    password: "",
    firstName: "",
    lastName : "",
    
  }
  constructor(
    private authService:AuthService,
    private userService:UserService,
    private router:Router 
  ) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(this.user.userName,[Validators.required,Validators.maxLength(3)]),
      'firstname': new FormControl(this.user.firstName,[Validators.required,Validators.maxLength(5)]),
      'lastname': new FormControl(this.user.lastName,[Validators.required,Validators.maxLength(5)]),
      'passwordGroup': new FormGroup({
        'password': new FormControl(this.user.password,[Validators.required]),
        'confirmPassword': new FormControl('',[Validators.required]),
      },[this.matchPasswords]),
      
    });
    // this.signUpForm.valueChanges.subscribe(
    //   (data)=>{
    //     this.matchPasswords(this.signUpForm);
    //   }
    // );
  }

  matchPasswords(group:AbstractControl): {[key:string]:any}|null
  {
    //console.log("hitting");
    const passControl = group.get('password');
    const conPassControl = group.get('confirmPassword');
    if(passControl.value === conPassControl.value || conPassControl.pristine)
    {
      return null;
    }
    else
    {
      return {'emailMismatch':true};
    }
  }

  onSubmit()
  {
    //console.log(this.signUpForm);
     this.user.userName = this.signUpForm.value.username;
     this.user.firstName = this.signUpForm.value.firstname;
     this.user.lastName = this.signUpForm.value.lastname;
     this.user.password = this.signUpForm.get('passwordGroup.password').value;
     //this.user.role = "Customer";
     this.userService.addUser(this.user).subscribe(
       (response)=>{
        this.router.navigate([this.authService.redirectUrlLogin])
       },
       error=>{
          console.log(error);
       }
     );
     //console.log(this.user);
    //this.router.navigate([this.authService.redirectUrlLogin])
  }

}

