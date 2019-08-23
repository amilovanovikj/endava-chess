import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordField:string;
  displayNameField:string;
  emailField:string;
  rePasswordField:string;
  
  passwordsMatch:boolean;
  complexity:boolean;

  emailNotEmpty: boolean;
  emailValid:boolean;

  passwordNotEmpty: boolean;
  passwordValid: boolean;

  displayNameValid: boolean;

  rePasswordValid: boolean;

  constructor() { }

  ngOnInit() {
    this.passwordsMatch = false;
    this.complexity = false;

    this.emailNotEmpty = false;
    this.emailValid = false;

    this.passwordNotEmpty = false;
    this.passwordValid = false;

    this.displayNameValid = false;

    this.rePasswordValid = false;
  }

  EmailChange()
  {
    this.emailField === "" ? this.emailNotEmpty = false : this.emailNotEmpty = true;
    if(this.emailValidator(this.emailField))
    {
      this.emailValid = true;
      //console.log(this.emailValid);
    }
    else
    {
      this.emailValid = false
      //console.log(this.emailValid);
    }
  }

  PasswordChange()
  {
    this.passwordValid = true;
    this.passwordNotEmpty = true;
    this.passwordField === "" ? this.passwordNotEmpty = false : this.passwordNotEmpty = true;
    if(this.passwordValidator(this.passwordField))
    {
      this.passwordValid = true;
    }
    else
    {
      this.passwordValid = false
    }
  }

  DisplayNameChange()
  {
    if(this.displayNameField.length <= 20)
    {
      this.displayNameField.length < 5 ? this.displayNameValid = false : this.displayNameValid = true;
    }
    else
    {
      this.displayNameValid = false;
    }
  }

  RePasswordChange()
  {
    this.passwordField === this.rePasswordField ? this.rePasswordValid = true : this.rePasswordValid = false;
  }

  Register(value)
  {
    this.match();
    this.passwordsMatch ? console.log(value) : this.passwordsMatch = false;
  }

  match()
  {
    this.passwordField == this.rePasswordField ? this.passwordsMatch = true : this.passwordsMatch = false;
  }

  passwordValidator(password)
  {

    if(password !== "")
    {
      //this.complexity = false;
      if(/[a-z]/.test(password) 
      && /[A-Z]/.test(password) 
      && /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
      && /[1-9]/.test(password)
      && password.length >= 6
      && password.length <= 20
      )
      {
        console.log('true')
        return true;
      }
      else
      {
        console.log('false')
        return false;
      }
    }
    else
    {
      return true;
    }
  }
  emailValidator(email)
  {
    if(email !== "")
    {
      if(email.length <= 40)
      {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      else
      {
        return false;
      }
    }
    else
    {
      return true;
    }
  }
}
