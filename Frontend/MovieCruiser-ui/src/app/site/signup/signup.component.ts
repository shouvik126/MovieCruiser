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
    username : "",
    password: "",
    firstname: "",
    lastname : "",
    role : "customer"
  }
  constructor(
    private authService:AuthService,
    private userService:UserService,
    private router:Router 
  ) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(this.user.username,[Validators.required,Validators.maxLength(3)]),
      'firstname': new FormControl(this.user.firstname,[Validators.required,Validators.maxLength(5)]),
      'lastname': new FormControl(this.user.lastname,[Validators.required,Validators.maxLength(5)]),
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
     this.user.username = this.signUpForm.value.username;
     this.user.firstname = this.signUpForm.value.firstname;
     this.user.lastname = this.signUpForm.value.lastname;
     this.user.password = this.signUpForm.get('passwordGroup.password').value;
     this.user.role = "customer";
     this.userService.addUser(this.user);
     //console.log(this.user);
    this.router.navigate([this.authService.redirectUrlLogin])
  }

}

