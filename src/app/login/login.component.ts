import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordField:string;
  emailField:string;

  constructor() { }

  ngOnInit() {
  }

  login(value)
  {
    console.log(value)
  }
}
