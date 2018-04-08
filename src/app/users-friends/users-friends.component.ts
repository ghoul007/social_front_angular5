import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NetworkService } from '../network.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users-friends',
  templateUrl: './users-friends.component.html',
  styleUrls: ['./users-friends.component.css']
})
export class UsersFriendsComponent implements OnInit {

  posts: any;
  currentUser: User;
  constructor(private auth: AuthService, private _network: NetworkService) { }

  async ngOnInit() {

    const currentUser = await this.auth.fetchCurrentUserInfo();

    this.currentUser = currentUser;


    this.posts = await this.getUsersAndFriends();

    // this.currentUser = currentUser;
  }


  async getUsersAndFriends() {
    const users = await this._network.request('get', 'user') as Array<any>;
    const friends = await this._network.request('get', 'user/friends') as Array<any>;

    this.currentUser.friends = friends.map(
      item => new User(
        item['firstName'], item['lastName'], item['email'], null, item['id']
      )
    );

    return users
      .filter(i => i.id !== this.currentUser.id)
      .map(
        item => new User(
          item['firstName'], item['lastName'], item['email'], null, item['id']
        )
      );
  }

  async addFriend(user: User) {
    const response = await this._network.request(
      'post', `users/${user.id}/add_friend`
    ) as Array<any>;

    if (response['success']) {
      this.currentUser.friends.push(user);
    }
  }

  async removeFriend(user: User) {
    const response = await this._network.request(
      'post', `users/${user.id}/remove_friend`
    ) as Array<any>;

    if (response['success']) {
      this.currentUser.friends = this.currentUser.friends.filter(
        i => i.id !== user.id
      );
    }
  }
}
