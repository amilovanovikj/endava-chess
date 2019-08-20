import { Component, OnInit, ViewChild } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.passwordsMatch = true;
    this.complexity = true;
  }

  register(value)
  {
    console.log(value);
  }
  match()
  {
    if(this.passwordField == this.rePasswordField)
    {
      this.passwordsMatch = true;
      
    }
    else
    {
      this.passwordsMatch = false;
    }
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
