import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { SocketsService } from './sockets.service';

const BACKEND_DOMAIN = "http://127.0.0.1";
const DEFAULT_TOKEN_STORAGE_KEY = 'AUTH_TOKEN';

@Injectable()
export class AuthService {

  private _cachedToken
  currentUser: User;
  constructor(private _http: HttpClient, private _socket: SocketsService) { }

  register(user: User) {
    return this._http.post(`${BACKEND_DOMAIN}/api/auth/register`,
      {
        "firstName": user.firstName,
        'lastName': user.lastName,
        'email': user.email,
        'password': user.password
      }
    ).toPromise()
  }
  async login(user: User) {
    try {
      const response = await this._http.post(`${BACKEND_DOMAIN}/api/auth/login`, { "email": user.email, "password": user.password }).toPromise()


      const accessToken = response['access_token'];

      if (!accessToken) {
        return false;
      }

      this.token = accessToken;

      return true;
    } catch (error) {
      return false;
    }

  }

  async fetchCurrentUserInfo() {
    try {
      this._socket.getEvent().subscribe(console.log);
      const response = await this._http.get(`${BACKEND_DOMAIN}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).toPromise();

      this.currentUser = new User(
        response['firstName'],
        response['lastName'],
        response['email'],
        response['friends'],
      );

      return this.currentUser;
    } catch (error) {
      throw error;
    }
  }

  get token() {
    if (this._cachedToken) {
      return this._cachedToken;
    }

    const tokenFromStorage = localStorage.getItem(DEFAULT_TOKEN_STORAGE_KEY);

    if (tokenFromStorage) {
      this._cachedToken = tokenFromStorage;

      return tokenFromStorage;
    }
  }

  set token(value) {
    this._cachedToken = value;

    if (value) {
      localStorage.setItem(DEFAULT_TOKEN_STORAGE_KEY, value);
    } else {
      localStorage.removeItem(DEFAULT_TOKEN_STORAGE_KEY);
    }
  }



}
