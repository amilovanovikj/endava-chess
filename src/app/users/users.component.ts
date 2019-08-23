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
  filteredUserList: IUser[];
  selectedUser: string = null;

  // tslint:disable-next-line: variable-name
  _userListFilter: string;
  get userListFilter() {
    return this._userListFilter;
  }
  set userListFilter(value: string) {
    this._userListFilter = value;
    this.filteredUserList = this.userListFilter ? this.performFilter(this.userListFilter) : this.userList;
  }

  performFilter(value: string): IUser[] {
    value = value.toLocaleLowerCase();
    return this.userList.filter((user: IUser) => user.username.toLocaleLowerCase().indexOf(value) !== -1);
  }

  colorClicked(color) {
    console.log('Playing against:', this.selectedUser, ' with ', color, 'color');
  }

  hasSelected() {
    return !!this.selectedUser;
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<IUser[]>('../assets/users_mock.json').subscribe(
      response => {
        this.userList = response;
        console.log(this.userList);
      },
      error => { },
      () => {  // ??
        this.filteredUserList = this.userList;
        this.userListFilter = '';
      }
    );
  }

}
