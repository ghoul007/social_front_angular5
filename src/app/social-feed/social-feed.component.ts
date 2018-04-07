import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.css']
})
export class SocialFeedComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.fetchCurrentUserInfo();
  }
  addEntry(entry) {
    alert(entry.content)
  }


}
