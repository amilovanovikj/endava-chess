import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

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


  constructor(private http: HttpClient, private userService: UserService, private router: Router) { }

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

  login(value) {
    console.log(value.password)
    this.userService.loginUser(value)
      .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
        });
  }
}
