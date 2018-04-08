import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from './auth.service'
@Injectable()
export class NetworkService {
  namespace = '/api'
  backendDomain = 'http://localhost';

  constructor(private _auth: AuthService,
    private _http: HttpClient) { }

  public async request(type, url, options = {}, addNamespace = true) {
    options = Object.assign(this.getDefaultOptions(),options);

    url = this.buildURL(url, addNamespace);
    return await this._http.request(type, url, options).toPromise();
  }

  public getDefaultOptions() {
    return {
      headers: {
        Authorization: `Bearer ${this._auth.token}`
      }
    }
  }

  public buildURL(url, addNamespace) {

    let result = this.backendDomain;
    if (addNamespace) {
      result += this.namespace;
    }


    result += `/${url}`

    return result
  }


}
