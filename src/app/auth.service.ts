import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';

const BACKEND_DOMAIN = "http://127.0.0.1"
@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(user: User) {
    return this._http.post(`${BACKEND_DOMAIN}/api/register`,
      {
        "firstName": user.firstName,
        'lastName': user.lastName,
        'email': user.email,
        'password': user.password
      }
    ).toPromise()
  }
  login(user: User) {
    return this._http.post(BACKEND_DOMAIN + '/auth', { "username": user.email, "password": user.password }).toPromise()
  }
}
