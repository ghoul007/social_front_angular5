import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NetworkService } from '../network.service';
import { User } from '../models/user';

@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.css']
})
export class SocialFeedComponent implements OnInit {

  posts: any;
  currentUser: User;
  constructor(private auth: AuthService, private _network: NetworkService) { }

  async ngOnInit() {
    const currentUser = this.auth.fetchCurrentUserInfo();
    this.posts = await this.getPosts();

    this.addEntry = this.addEntry.bind(this);
    // this.currentUser = currentUser;
  }
  async addEntry(entry) {
    const response = await this._network.request('post', 'post', {
      body: {
        content: entry.content
      }
    });

    this.posts.push({
      authorId: response['authoe_id'],
      content: response['content']
    })

  }

  async getPosts() {
    return await this._network.request('get', 'post');
  }

}
