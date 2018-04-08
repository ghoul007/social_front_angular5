import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../network.service';
import { User } from '../models/user';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  author: User;
  @Input() post;
  constructor(private _network: NetworkService) { }

  ngOnInit() {
    this.getUserDetails();
  }


  async getUserDetails() {
    const response = await this._network.request('get', `user/${this.post.author_id}`);
    this.author = new User(response['firstName'], response['lastName']);
  }

}
