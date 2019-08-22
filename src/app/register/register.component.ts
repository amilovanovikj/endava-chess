import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordField:string;
  displatNameField:string;
  emailField:string;
  rePasswordField:string;
  passwordsMatch:boolean;
  complexity:boolean;

  user:IUser;
  constructor() { }

  ngOnInit() {
    this.passwordsMatch = true;
    this.complexity = true;
  }

  register(value)
  {
    this.match();
    this.passwordsMatch ? console.log(value) : this.passwordsMatch = false;
  }
  match()
  {
    this.passwordField == this.rePasswordField ? this.passwordsMatch = true : this.passwordsMatch = false;
  }
  complex()
  {
    this.complexity = false;
    if(/[a-z]/.test(this.passwordField) 
    && /[A-Z]/.test(this.passwordField) 
    && /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.passwordField)
    && /[1-9]/.test(this.passwordField))
    {
      this.complexity = true;
    }
  }
}
