import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.css']
})
export class SocialFeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addEntry(entry) {
    alert(entry.content)
  }


}
