import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailField: string;
  passwordField: string;

  emailNotEmpty: boolean;
  passwordNotEmpty: boolean;

  loginValid: boolean; // ????

  constructor() { }

  ngOnInit() {
    this.emailNotEmpty = false;
    this.passwordNotEmpty = false;
  }

  EmailChange()
  {
    this.emailField === "" ? this.emailNotEmpty = false : this.emailNotEmpty = true;
  }

  PasswordChange()
  {
    console.log(this.passwordField)
    this.passwordField === "" ? this.passwordNotEmpty = false : this.passwordNotEmpty = true;
  }

  Login(value)
  {
    console.log(value)
  }
}
