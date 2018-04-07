import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(user: User) {
    this._http.post('/api/register', { user }).subscribe()
  }
  login(user: User) {
   return  this._http.post('https://httpstat.us/200', { "username": user.email, "password": user.password }).toPromise()
  }
}
