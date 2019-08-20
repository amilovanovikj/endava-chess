import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/IUser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selectSize = 3;
  userList: IUser[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<IUser[]>('../assets/users_mock.json').subscribe(
      response => {
        this.userList = response;
        console.log(this.userList);
      }
    );
  }

}
