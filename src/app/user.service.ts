import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActiveUser} from './models/ActiveUser';
import {Observable} from 'rxjs';
import {User} from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  registerUser(user: User): Observable<ActiveUser> {
    return this.http.post<ActiveUser>('http://localhost:8080/register', user);
  }

  loginUser(user: User): Observable<ActiveUser> {
    return this.http.post<ActiveUser>('http://localhost:8080/login', user);
  }
}
