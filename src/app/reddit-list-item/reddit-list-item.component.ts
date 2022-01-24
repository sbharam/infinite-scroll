import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reddit-list-item',
  templateUrl: './reddit-list-item.component.html',
  styleUrls: ['./reddit-list-item.component.scss']
})
export class RedditListItemComponent implements OnInit, OnChanges {

  @Input() redditPosts: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.redditPosts);
  }

  ngOnInit(): void {
  }

}
