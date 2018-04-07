import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User;
  constructor(private _auth: AuthService) { }

  ngOnInit() {
    this.model = new User();
  }

  login1() {
    this.login();
  }
  async login() {
    let t = await this._auth.login(this.model);
    alert('success' + t)
  }
}
