import { Component, OnInit } from '@angular/core';
import { User } from "../models/user"
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public model: User;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.model = new User()
  }


  async submitHandler() {
    const response = await this.authService.register(this.model);
    if (response['success']) {
      alert('Success')
    } else {
      alert('Faillure')
    }
  }
}
